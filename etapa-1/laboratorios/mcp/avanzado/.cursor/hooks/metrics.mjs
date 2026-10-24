#!/usr/bin/env node
// Medición automática de sesiones del agente (Laboratorio 4B, Fase A).
//
// Modo hook (stdin con JSON): cada evento se agrega como una línea a
// .cursor/hooks/state/events.jsonl. Al terminar la respuesta (stop) se regenera
// evidencia/metricas.md con una fila por pregunta enviada al agente.
//
// Privacidad: solo se guardan metadatos (nombre de herramienta, ruta de archivo leído,
// servidor MCP, duración, modelo). NO se guarda el texto del prompt ni la salida de las tools.
//
// Modo CLI:
//   node .cursor/hooks/metrics.mjs --report   regenera evidencia/metricas.md
//   node .cursor/hooks/metrics.mjs --reset    borra los eventos y el reporte
//
// Compatible con eventos de Cursor y de Claude Code (se normalizan los nombres).
// Un hook de medición nunca debe romper al agente: siempre responde JSON y sale con código 0.
import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOOKS_DIR = dirname(fileURLToPath(import.meta.url));
const WORKSPACE = resolve(HOOKS_DIR, '..', '..');
const STATE_DIR = join(HOOKS_DIR, 'state');
const EVENTS_FILE = join(STATE_DIR, 'events.jsonl');
const REPORT_FILE = join(WORKSPACE, 'evidencia', 'metricas.md');

const EVENT_KIND = {
  beforeSubmitPrompt: 'prompt', UserPromptSubmit: 'prompt',
  postToolUse: 'tool', PostToolUse: 'tool',
  postToolUseFailure: 'toolFailure', PostToolUseFailure: 'toolFailure',
  afterMCPExecution: 'mcp',
  subagentStop: 'subagent', SubagentStop: 'subagent',
  stop: 'stop', Stop: 'stop',
};

// ---------- utilidades ----------

function parseMaybeJson(value) {
  if (typeof value !== 'string') return value;
  try { return JSON.parse(value); } catch { return null; }
}

function readStdin() {
  return new Promise((resolveInput) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => (data += chunk));
    process.stdin.on('end', () => resolveInput(data.replace(/^\uFEFF/, '')));
    process.stdin.on('error', () => resolveInput(data));
  });
}

function reply(kind) {
  // beforeSubmitPrompt/UserPromptSubmit esperan "continue"; el resto, un objeto vacío.
  process.stdout.write(kind === 'prompt' ? '{"continue":true}\n' : '{}\n');
}

function appendEvent(event) {
  mkdirSync(STATE_DIR, { recursive: true });
  appendFileSync(EVENTS_FILE, JSON.stringify(event) + '\n', 'utf8');
}

// ---------- captura ----------

function buildEvent(kind, input) {
  const base = {
    t: kind,
    ts: Date.now(),
    cid: input.conversation_id ?? input.session_id ?? 'sin-id',
    model: input.model ?? input.model_id ?? null,
  };

  switch (kind) {
    case 'prompt': {
      // Etiqueta opcional "#run:mi-etiqueta" dentro del prompt; el texto del prompt no se guarda.
      const label = /#run:([\w.-]+)/i.exec(input.prompt ?? '')?.[1] ?? null;
      return { ...base, label };
    }
    case 'tool':
    case 'toolFailure': {
      const name = String(input.tool_name ?? 'desconocida');
      const toolInput = parseMaybeJson(input.tool_input) ?? {};
      const event = { ...base, tool: name, ms: input.duration ?? null, id: input.tool_use_id ?? null };
      if (name === 'Read') {
        event.file = toolInput.path ?? toolInput.file_path ?? toolInput.target_file ?? null;
      }
      // Claude Code nombra las tools MCP como mcp__<servidor>__<tool>
      const claudeMcp = /^mcp__([^_]+(?:_[^_]+)*?)__/.exec(name);
      if (claudeMcp) event.server = claudeMcp[1];
      return event;
    }
    case 'mcp':
      return { ...base, server: input.mcp_server_name ?? 'desconocido', tool: input.tool_name ?? null, ms: input.duration ?? null };
    case 'subagent':
      return { ...base, status: input.status ?? null, toolCalls: input.tool_call_count ?? null, kind: input.subagent_type ?? null };
    case 'stop':
      return { ...base, status: input.status ?? 'completed' };
    default:
      return null;
  }
}

// ---------- agregación ----------

function classify(tool) {
  if (tool === 'Read') return 'read';
  if (/^(Grep|Glob|SemanticSearch|CodebaseSearch)$/.test(tool)) return 'search';
  if (/^(Shell|Bash)$/.test(tool)) return 'shell';
  if (/^(MCP:|mcp__)/.test(tool)) return 'mcp';
  if (/^(Task|Agent)$/.test(tool)) return 'task';
  if (/^(Write|Edit|StrReplace|MultiEdit|Delete|EditNotebook)$/.test(tool)) return 'edit';
  return 'other';
}

function newRun(event, index) {
  return {
    n: index,
    cid: event.cid,
    label: event.t === 'prompt' ? event.label : null,
    model: event.model,
    start: event.ts,
    end: null,
    status: 'en curso',
    tools: 0,
    byKind: { read: 0, search: 0, shell: 0, mcp: 0, task: 0, edit: 0, other: 0 },
    files: new Set(),
    servers: new Map(),
    failures: 0,
    subagents: 0,
    subagentToolCalls: 0,
    seenToolIds: new Set(),
  };
}

export function aggregate(events) {
  const runs = [];
  const current = new Map(); // cid -> run activa

  const runFor = (event) => {
    let run = current.get(event.cid);
    if (!run) {
      run = newRun(event, runs.length + 1);
      runs.push(run);
      current.set(event.cid, run);
    }
    return run;
  };

  for (const event of events) {
    if (event.t === 'prompt') {
      const run = newRun(event, runs.length + 1);
      runs.push(run);
      current.set(event.cid, run);
      continue;
    }

    const run = runFor(event);
    if (!run.model && event.model) run.model = event.model;

    switch (event.t) {
      case 'tool':
      case 'toolFailure': {
        // Evita contar dos veces la misma llamada si dos fuentes de hooks se disparan a la vez.
        if (event.id) {
          if (run.seenToolIds.has(event.id)) break;
          run.seenToolIds.add(event.id);
        }
        run.tools += 1;
        run.byKind[classify(event.tool)] += 1;
        if (event.t === 'toolFailure') run.failures += 1;
        if (event.file) run.files.add(event.file);
        if (event.server) run.servers.set(event.server, (run.servers.get(event.server) ?? 0) + 1);
        break;
      }
      case 'mcp':
        run.servers.set(event.server, (run.servers.get(event.server) ?? 0) + 1);
        break;
      case 'subagent':
        run.subagents += 1;
        run.subagentToolCalls += event.toolCalls ?? 0;
        break;
      case 'stop':
        run.end = event.ts;
        run.status = event.status;
        break;
    }
  }
  return runs;
}

// ---------- reporte ----------

function formatServers(servers) {
  if (servers.size === 0) return '—';
  return [...servers].map(([name, count]) => `${name}×${count}`).join(', ');
}

export function renderReport(runs) {
  const header = [
    '# Métricas de sesiones del agente',
    '',
    '> Generado automáticamente por `.cursor/hooks/metrics.mjs` (no lo edites a mano: se sobrescribe).',
    `> Última actualización: ${new Date().toLocaleString('es-EC')}.`,
    '> **No incluye tokens:** los hooks no los reciben. Anótalos desde el panel Context en `evidencia/informe.md`.',
    '',
    '| # | Chat | Etiqueta | Modelo | Tool calls | Read | Archivos distintos | Búsquedas | Shell | MCP (por servidor) | Subagentes (tool calls) | Fallos | Tiempo (s) | Estado |',
    '|---|------|----------|--------|-----------:|-----:|-------------------:|----------:|------:|--------------------|------------------------:|-------:|-----------:|--------|',
  ];

  const rows = runs.map((run) => {
    const seconds = run.end ? ((run.end - run.start) / 1000).toFixed(1) : '—';
    return [
      run.n,
      run.cid.slice(0, 8),
      run.label ?? '—',
      run.model ?? '—',
      run.tools,
      run.byKind.read,
      run.files.size,
      run.byKind.search,
      run.byKind.shell,
      formatServers(run.servers),
      `${run.subagents} (${run.subagentToolCalls})`,
      run.failures,
      seconds,
      run.status,
    ].join(' | ');
  });

  const notes = [
    '',
    '### Cómo leerla',
    '',
    '- **Tool calls**: todas las herramientas invocadas por el agente (lectura, búsqueda, shell, MCP, edición…).',
    '- **Read / Archivos distintos**: lecturas con la herramienta `Read` y cuántos archivos diferentes abrió.',
    '- **MCP (por servidor)**: llamadas a cada servidor MCP; `codegraph×N` indica cuántas veces usó el grafo.',
    '- **Subagentes (tool calls)**: subagentes lanzados y las llamadas que hicieron internamente. Pueden ya estar incluidas en *Tool calls*; no las sumes.',
    '- **Tiempo**: desde que envías el prompt hasta que el agente termina; incluye esperas de aprobación manual.',
    '- Compara solo filas con el **mismo modelo** y el mismo prompt.',
  ];

  return [...header, ...rows.map((row) => `| ${row} |`), ...notes, ''].join('\n');
}

function readEvents() {
  if (!existsSync(EVENTS_FILE)) return [];
  return readFileSync(EVENTS_FILE, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => { try { return JSON.parse(line); } catch { return null; } })
    .filter(Boolean);
}

function writeReport() {
  mkdirSync(dirname(REPORT_FILE), { recursive: true });
  writeFileSync(REPORT_FILE, renderReport(aggregate(readEvents())), 'utf8');
}

// ---------- entrada ----------

async function main() {
  const arg = process.argv[2];

  if (arg === '--report') { writeReport(); console.log(`Reporte: ${REPORT_FILE}`); return; }
  if (arg === '--reset') {
    rmSync(STATE_DIR, { recursive: true, force: true });
    rmSync(REPORT_FILE, { force: true });
    console.log('Eventos y reporte eliminados.');
    return;
  }

  let kind = 'other';
  try {
    const raw = await readStdin();
    if (raw.trim()) {
      const input = JSON.parse(raw);
      kind = EVENT_KIND[input.hook_event_name] ?? 'other';
      const event = buildEvent(kind, input);
      if (event) appendEvent(event);
      if (kind === 'stop') writeReport();
    }
  } catch {
    // La medición nunca debe interferir con el agente.
  }
  reply(kind);
}

// Permite importar aggregate/renderReport en pruebas sin ejecutar main().
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}

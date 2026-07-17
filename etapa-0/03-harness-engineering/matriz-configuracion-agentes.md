# Matriz de configuración: Agentes de desarrollo IA

> **Verificada a: julio 2026.** Este ecosistema cambia cada pocas semanas; revisar las fuentes al final antes de reutilizar.

## Configuración a nivel de proyecto

| Configuración | Cursor | Claude Code | Codex (OpenAI) | GitHub Copilot |
|---|---|---|---|---|
| **Instrucciones persistentes** | `AGENTS.md` (también legado: `.cursorrules`) | `CLAUDE.md` ⚠️ *No lee `AGENTS.md` nativamente* | `AGENTS.md` | `.github/copilot-instructions.md` |
| **Skills** | `.cursor/skills/`<br>`.claude/skills/`<br>`.agents/skills/` | `.claude/skills/` | `.agents/skills/`<br>`.codex/skills/` | `.github/skills/` |
| **Hooks** | `.cursor/hooks.json` | Se configuran en `.claude/settings.json` (clave `"hooks"`) ⚠️ *`.claude/hooks/` es solo convención para guardar los scripts* | `.codex/hooks.json` | `.github/hooks/*.json` |
| **Subagents** | `.cursor/agents/` | `.claude/agents/` | `.codex/agents/` | `.github/agents/*.agent.md` |
| **MCP** | `.cursor/mcp.json` | `.mcp.json` (raíz del proyecto) | `.codex/config.toml` (sección `[mcp_servers]`) | `.vscode/mcp.json` (VS Code); settings del repo para el coding agent en github.com |
| **Rules** | `.cursor/rules/` | `.claude/rules/` (reglas modulares, se cargan junto con `CLAUDE.md`) | — | `.github/instructions/*.instructions.md` |
| **ADRs** | Convención (`docs/adr/`), no feature nativa | Convención (`docs/adr/`), no feature nativa | Convención | Convención; puede leerlos un custom agent especializado |
| **DESIGN.md** | Convención | Convención (lo considera si se referencia desde `CLAUDE.md`) | Convención | Convención |

>**ADRs y DESIGN.md marcados como convención.** Ningún agente carga `docs/adr/` ni `DESIGN.md` automáticamente como mecanismo nativo; funcionan solo si se referencian desde las instrucciones persistentes (ej. import `@docs/adr/...` en `CLAUDE.md`).

## Configuración a nivel global (usuario)

| Configuración | Cursor | Claude Code | Codex (OpenAI) | GitHub Copilot |
|---|---|---|---|---|
| **Instrucciones** | "User Rules" (settings de la app) | `~/.claude/CLAUDE.md` | `~/.codex/AGENTS.md` | Instrucciones personales en github.com (no es archivo local) |
| **Skills** | `~/.cursor/skills/` | `~/.claude/skills/` | `~/.agents/skills/` | `~/.copilot/skills/` (Copilot CLI) |
| **Hooks** | `~/.cursor/hooks.json` | `~/.claude/settings.json` | `~/.codex/hooks.json` | — (los hooks son por repositorio) |
| **Subagents** | `~/.cursor/agents/` | `~/.claude/agents/` | `~/.codex/agents/` | Repo `{org}/.github` o `{org}/.github-private` (nivel organización) |
| **MCP** | `~/.cursor/mcp.json` | `~/.claude.json` o `claude mcp add --scope user` | `~/.codex/config.toml` | `~/.copilot/mcp-config.json` (CLI); `mcp.json` de usuario en VS Code |

### Nota adicional: jerarquía completa de memoria en Claude Code

| Nivel | Ubicación | Compartido con |
|---|---|---|
| Enterprise / managed policy | Linux: `/etc/claude-code/CLAUDE.md` · macOS: `/Library/Application Support/ClaudeCode/CLAUDE.md` · Windows: `C:\ProgramData\ClaudeCode\CLAUDE.md` | Toda la organización |
| Proyecto | `./CLAUDE.md` | Equipo (vía control de versiones) |
| Usuario | `~/.claude/CLAUDE.md` | Solo tú (todos los proyectos) |
| Proyecto local | `./CLAUDE.local.md` | **Deprecado** — usar imports `@~/.claude/...` en su lugar |

Los `CLAUDE.md` soportan **imports** con sintaxis `@ruta/al/archivo` (hasta 5 niveles de profundidad). Este es el mecanismo oficial para que Claude Code consuma un `AGENTS.md` compartido: agregar `@AGENTS.md` dentro de `CLAUDE.md`, o alternativamente crear un symlink `ln -s AGENTS.md CLAUDE.md`.

## Aclaraciones importantes

- **Claude Code y AGENTS.md:** confirmado por la documentación oficial de Anthropic (verificado hasta junio 2026) — Claude Code **no** lee `AGENTS.md` de forma nativa; si el repo solo contiene `AGENTS.md`, Claude Code no carga ninguna instrucción de proyecto y no muestra error. Existe una petición muy votada en el issue tracker de Claude Code para soporte nativo, aún abierta a mediados de 2026.
- **AGENTS.md como estándar:** surgió en 2025 (colaboración Sourcegraph, OpenAI, Google, Cursor, Factory) y hoy está bajo gobernanza de la Linux Foundation, adoptado por 30+ herramientas y presente en decenas de miles de repositorios. Claude Code es la excepción notable.
- **Skills (SKILL.md):** es un formato abierto (carpeta con `SKILL.md` + frontmatter YAML) portable entre Claude Code, Codex, Cursor, Copilot y 30+ agentes. Lo que cambia entre herramientas es **dónde** se colocan, no el formato.
- **Hooks de Copilot:** disponibles para el coding agent; eventos soportados incluyen `sessionStart`, `sessionEnd`, `userPromptSubmitted`, `preToolUse`, `postToolUse`, `agentStop`, `subagentStop` y `errorOccurred`.
- **Hooks de Codex:** el motor de hooks es estable desde la v0.124.0 (abril 2026); desde v0.129.0 existe el comando `/hooks` en la TUI.
- **MCP en Codex:** desde marzo 2026 existe el subcomando `codex mcp` (add/remove/list/login) que edita `config.toml` automáticamente; CLI y extensión de IDE comparten el mismo archivo.

## Fuentes

**Documentación oficial**

- Claude Code — Memory (CLAUDE.md, jerarquía, imports, auto memory): https://code.claude.com/docs/en/memory
- Claude Code — Hooks (configuración en settings.json): https://code.claude.com/docs/en/hooks-guide
- Claude Code — Memoria y ubicaciones por nivel (enterprise/proyecto/usuario): https://docs.anthropic.com/en/docs/claude-code/memory
- GitHub Docs — Custom agents (`.github/agents/`): https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents
- GitHub Docs — Custom agents configuration (MCP en perfiles de agente): https://docs.github.com/en/copilot/reference/custom-agents-configuration
- GitHub Changelog — Custom agents for GitHub Copilot: https://github.blog/changelog/2025-10-28-custom-agents-for-github-copilot/
- OpenAI — Codex y MCP (config.toml compartido entre CLI e IDE): https://developers.openai.com/codex/mcp
- VS Code — Agent plugins (formato compartido VS Code / Copilot CLI / Claude Code): https://code.visualstudio.com/docs/agent-customization/agent-plugins

**Guías y análisis (verificación cruzada, 2026)**

- CLAUDE.md vs AGENTS.md — qué lee realmente Claude Code (mayo 2026): https://bestagent.dev/claude-md-vs-agents-md-2026/
- AGENTS.md vs CLAUDE.md — 5 diferencias clave, con declaración oficial de Anthropic (mayo 2026): https://thepromptshelf.dev/blog/agents-md-vs-claude-md/
- Workarounds oficiales `@AGENTS.md` / symlink para Claude Code: https://gist.github.com/yurukusa/d36197848911f025add142abefcde685
- Copilot: Instructions vs Prompts vs Agents vs Skills vs MCP vs Hooks (abril 2026): https://dev.to/pwd9000/github-copilot-instructions-vs-prompts-vs-custom-agents-vs-skills-vs-x-vs-why-339l
- GitHub Copilot Skills — setup `.github/skills/` (2026): https://www.agensi.io/learn/github-copilot-skills-setup-guide
- Skills en Cursor — directorios soportados (`.cursor/skills`, `.claude/skills`, `.agents/skills`): https://handsonai.info/platforms/cursor/skills/
- Agent Skills side-by-side: Claude Code, Copilot, Codex y Cursor (feb 2026): https://blog.ainative.medhavi.dev/p/set-up-agent-skills-in-claude-code-copilot-codex-cursor-a-side-by-side-guide
- Codex CLI — guía completa 2026 (config.toml, AGENTS.md, hooks, skills): https://blakecrosley.com/guides/codex
- Codex CLI — integración MCP y estructura `.codex/` de proyecto: https://codex.danielvaughan.com/2026/03/26/codex-cli-mcp-integration/
- Codex CLI — subcomando `codex mcp` (mayo 2026): https://codex.danielvaughan.com/2026/05/07/codex-mcp-subcommand-managing-mcp-servers-from-the-terminal/
- Codex CLI — MCP setup (CLI, VS Code, app) (jul 2026): https://composio.dev/content/how-to-mcp-with-codex
- Instalación de skills por plataforma (rutas globales y de proyecto): https://agentskill.sh/how-to-install-a-skill
- Claude Code Hooks — guía práctica (DataCamp, ene 2026): https://www.datacamp.com/tutorial/claude-code-hooks

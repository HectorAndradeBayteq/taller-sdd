# Día 5: Laboratorio 4: Optimización de SDD

# Research

El skill de /work-research es una herramienta para tomar decisiones mientras se planifica y documentar el porque de esas decisiones, principalmente como soporte para migraciones, refactorizacion o creacion de ADRs

# Workflows

Su objetivo es permitir que Claude ejecute **flujos de trabajo largos, multiagente y con estado**, en lugar de depender únicamente de un único agente que coordina todo mediante prompts.

**Usando subagentes**

```bash
Usuario
   │
Claude (orquestador)
   ├── Subagente A
   ├── Subagente B
   └── Subagente C
```

**Usando workflows**

```bash
Usuario
   │
Workflow
   │
   ├── Fase 1
   │     ├── Agente A
   │     ├── Agente B
   │     └── Agente C
   │
   ├── Fase 2
   │     └── Agente D
   │
   └── Fase 3
         └── Agente E
```

# Integraciones

## Herramientas ALM (Azure DevOps, Jira)

A través de un servidor **MCP** te puedes conectar con Azure DevOps o Jira para sincronizar las historias de usuario, work items y tareas que gestionas en el flujo SDD: crear, leer y actualizar work items, mover su estado (To Do/Doing/Done), enlazar commits/PRs y mantener trazabilidad entre lo documentado (US-XXX, TK-XXX) y lo registrado en la herramienta ALM del equipo, sin salir del agente.

```bash
# Te guia y te ayuda a configurar el MCP en los agentes que lo requieran
/alm-install
```

## Indexado del proyecto

**CodeGraph** es una herramienta de inteligencia de código con enfoque local-first. Analiza tu base de código utilizando Tree-sitter, almacena cada símbolo, relación y archivo en una base de datos local SQLite, y expone el resultado como un grafo de conocimiento consultable. 

Otras opciones a considerar son: Sourcegraph, OpenGrep.

```bash
# Ejecuta instalador
npx @colbymchenry/codegraph

# Dentro de la carpeta del proyecto se inicializa
codegraph install --target auto --location local --yes 2>&1
codegraph init
```

## Optimización de uso de tokens

**Headroom** es la capa de optimización de contexto para aplicaciones basadas en modelos de lenguaje (LLM). Comprime las salidas de herramientas, los resultados de bases de datos, las lecturas de archivos y los resultados de RAG antes de que lleguen al modelo. Obtén las mismas respuestas utilizando solo una fracción de los tokens. 

Otras opciones a considerar: Mem0, LiteLLM, Helicone.

```bash
# Crea un entorno virtual
uv venv

# Activa el entorno virtual
source .venv/bin/activate

# Instala headroom proxy
uv pip install "headroom-ai[proxy]"
uv pip install "fastapi[standard]"

# Levanta el proxy, debe estar levantado si se quiere usar headroom
headroom proxy
```

Modifica el archivo **.claude/settings.local.json** y agrega esto:

```json
"env": {
  ...
  "ANTHROPIC_BASE_URL": "http://127.0.0.1:8787"
}
```

## Observabilidad de IA

**Langfuse** es una plataforma de observabilidad (observability) para aplicaciones de IA. Su objetivo es ayudarte a entender qué está haciendo tu aplicación con los LLM (OpenAI, Anthropic, Gemini, etc.), detectar problemas y mejorar prompts, herramientas y costos.

Otras opciones a considerar: Helicone, OpenLIT.

```bash
# Abrir la consola de claude
claude

# Instalar plugin dentro de la consola de claude
claude plugin marketplace add langfuse/Claude-Observability-Plugin
claude plugin install langfuse-observability@langfuse-observability
```

Abrir archivo **.claude/settings.local.json** y agregar la configuración:

```json
"env": {
  "TRACE_TO_LANGFUSE": "true",
  "LANGFUSE_PUBLIC_KEY": "pk-lf-xxx",
  "LANGFUSE_SECRET_KEY": "sk-lf-xxx",
  "LANGFUSE_BASE_URL": "https://cloud.langfuse.com"
}
```
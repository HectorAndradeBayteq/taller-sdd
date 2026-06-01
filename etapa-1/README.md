# Etapa 1 — Inteligencia Artificial y desarrollo de software

La primera etapa del taller introduce los fundamentos del **desarrollo asistido por IA** en entornos reales: cómo un IDE como Cursor orquesta agentes, compone contexto, expone herramientas externas y puede gobernarse con reglas, skills y hooks. Los laboratorios están pensados para recorrerse en orden: cada uno construye sobre conceptos del anterior (delegación multiagente → instrucciones reutilizables → límites de contexto → integraciones MCP → control del runtime → portabilidad entre clientes → amenazas y mitigaciones). Al cierre del índice hay un **laboratorio extra** teórico sobre el bucle agente y las capas de contexto del IDE.

Abre cada carpeta como **workspace** en Cursor (o en la herramienta indicada) y sigue el `README.md` del laboratorio correspondiente.

---

## Índice de laboratorios

### [Laboratorio 1: Agentes y subagentes](./laboratorios/agents/README.md)

Profundiza en **orquestación multiagente** sin skills: un coordinador delega en subagentes definidos en `.cursor/agents/` y políticas en `AGENTS.md`. El ejercicio práctico genera fichas de catálogo con trabajo en paralelo, subagentes anidados (por ejemplo, búsqueda de opiniones y análisis de sentimiento) y trazabilidad mediante logs y auditoría.

### [Laboratorio 2: Prompts y skills](./laboratorios/skills/README.md)

Centrado en **Claude Code** y el ecosistema de **skills**: comandos reutilizables versionables en `.claude/skills/` que inyectan instrucciones persistentes. Crearás y evaluarás una skill de ejemplo con el plugin `skill-creator`, contrastando slash commands nativos, skills de equipo y plugins.

### [Laboratorio 3: Ventana de contexto y atención](./laboratorios/context/README.md)

Experimenta de forma observable cómo Cursor **compone y consume la ventana de contexto**: panel Context, categorías (system prompt, tools, rules, skills, MCP, subagentes, conversación) y el impacto de añadir `AGENTS.md`. El objetivo es entender por qué el modelo no “ve” todo el repo y cómo mantener una ventana de atención eficiente en trabajo diario.

### [Laboratorio 4: MCP (Model Context Protocol)](./laboratorios/mcp/README.md)

Conecta Cursor a un **servidor MCP** del proyecto — en este caso Chrome DevTools MCP — para que el agente automatice el navegador con herramientas tipadas (`navigate_page`, `evaluate_script`, capturas, consola). Configurarás `.cursor/mcp.json`, validarás la integración en ajustes del IDE y documentarás resultados de una sesión controlada.

### [Laboratorio 5: Hooks](./laboratorios/hooks/README.md)

Explora **hooks** como middleware del agente: scripts que Cursor ejecuta antes o después de eventos clave (`beforeShellExecution`, `postToolUse`, etc.). Implementarás observabilidad (registro en archivo) y controles preventivos (bloqueo de comandos peligrosos) sobre la ejecución real de herramientas.

### [Laboratorio 6: Compatibilidad de configuración entre agentes](./laboratorios/config/README.md)

Muestra cómo **trasladar configuración de proyecto** entre Cursor y Claude Code: equivalencias entre `AGENTS.md` y `CLAUDE.md`, `.cursor/mcp.json` y `.mcp.json`, y skills copiando `.cursor/skills` a `.claude/skills`. El flujo práctico mantiene instrucciones y un servidor MCP de laboratorio alineados en ambos clientes.

### [Laboratorio 7: Seguridad](./laboratorios/security/README.md)

Cierra la secuencia principal con **inyección de prompt indirecta** vía resultados de herramientas MCP en un entorno controlado: provocar exfiltración simulada, comparar comportamiento entre plataformas y mitigar con hooks (`beforeMCPExecution`, `beforeShellExecution`) y reglas de uso de herramientas. Requiere haber completado los laboratorios de MCP y Hooks.

### [Laboratorio extra: Desarrollo asistido por IA y Agent Loop](./laboratorios/agent-loop/README.md)

Parte desde la arquitectura del **bucle agente–herramientas**: qué contexto recoge Cursor de tu repositorio, qué envía al backend y por qué una petición en modo Agent no se resuelve en una sola llamada al modelo. Aprenderás a distinguir contexto local, indexación semántica, reglas de proyecto y capas opacas del producto, y a valorar implicaciones de privacidad y uso de cloud agents. Es **teórico** y complementa los laboratorios numerados; puedes hacerlo al final de la etapa o como repaso.

---

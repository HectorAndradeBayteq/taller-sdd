# Etapa 2 — Práctica controlada con el instructor

La segunda etapa profundiza en **Specification-Driven Development (SDD)** aplicado a proyectos completos, guiada paso a paso junto al instructor. Los laboratorios recorren el ciclo completo: desde el scaffolding de un proyecto nuevo y la configuración del *AI Harness* (instrucciones persistentes, ADRs, skills), pasando por la definición de historias de usuario, specs y pruebas, hasta la gobernanza del proceso con integraciones (MCP, Figma), automatizaciones y optimización de contexto/tokens. Los dos primeros laboratorios son eminentemente prácticos (construcción de aplicaciones reales); los dos últimos son más teóricos y cubren el ecosistema de *skills* y herramientas de optimización de SDD.

Sigue el material de cada laboratorio en orden; cada uno construye sobre los conceptos y el proyecto del anterior.

---

## Pre-requisitos

- Cursor v3.3+ instalado: https://cursor.com/
- Nodejs v22+ instalado: https://nodejs.org/en
- Git instalado: https://git-scm.com/install/
- Github CLI (MAC: `brew install gh`, PC: `winget install --id GitHub.cli`)

---

## Índice de laboratorios

### [Laboratorio 1: To-Do App](./lab-001-to-do-app.md)

Recorre el proceso completo de un proyecto **greenfield** con SDD: instalación del proyecto base, configuración del harness (`AGENTS.md`/`CLAUDE.md`), selección de *skills* de stack (`autoskills`, skills de SDD) y definición de ADRs base (arquitectura, estilo de código, pruebas, Quality Gate, branching, stack de presentación). Sobre esa base se implementan dos requerimientos —la app de tareas y una sección de Notes— usando dos flujos distintos: historia de usuario → casos de prueba → spec (`/openspec-propose`) → implementación (`/openspec-apply-change`), y luego historia de usuario → `/brainstorming` → `/writing-plans` → `/executing-plans` (Superpowers).

### [Laboratorio 2: Time Tracker App](./lab-002-time-tracker.md)

Extiende el flujo anterior integrando SDD con herramientas del ecosistema de desarrollo: se conectan servidores MCP de **Figma** y **Chrome DevTools**, se definen tres historias de usuario (Proyectos, Tareas, Historial de registros) enlazadas a un diseño de alta fidelidad en Figma, se investigan decisiones pendientes con `/work-research` antes de especificar, y se implementa cada spec en una rama `feature/*` mediante un loop de `/openspec-apply-change` para finalmente preparar la entrega con `/pr-create`.

### [Laboratorio 3: Skills](./lab-003-skills.md)

Laboratorio teórico sobre **Skills**: qué son, su especificación (`SKILL.md`, frontmatter, estructura de archivos), dónde viven (scope de proyecto vs. usuario) y la carga progresiva de contexto en tres niveles (metadatos, instrucciones, recursos). Cubre los distintos tipos de skills (prompt, workflow, handoffs, planificación, ReAct, memoria, estado), una comparativa de *tools* disponibles según el agente (Cursor, Claude, Codex), buenas prácticas para escribir scripts que los agentes puedan operar, el concepto de *handoffs* entre agentes y cómo evaluar skills con `vskill` (evals, coverage, scan).

### [Laboratorio 4: Optimización de SDD](./lab-004-extras.md)

Cierra la etapa con temas de optimización y gobernanza del proceso SDD: el rol de `/work-research` para documentar decisiones, el uso de **workflows** multiagente con fases frente a la orquestación simple de subagentes, e integraciones para llevar SDD a producción: **CodeGraph** para indexar el proyecto como grafo de conocimiento consultable, **Headroom** como proxy de optimización de tokens comprimiendo salidas de herramientas, y **Langfuse** para observabilidad de las interacciones con LLM.

---

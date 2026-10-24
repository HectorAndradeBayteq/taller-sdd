# Etapa 2 — Práctica controlada con el instructor

La segunda etapa profundiza en **Specification-Driven Development (SDD)** aplicado a proyectos completos, guiada paso a paso junto al instructor. Los laboratorios recorren el ciclo completo: desde el scaffolding de un proyecto nuevo y la configuración del *AI Harness* (instrucciones persistentes, ADRs, skills), pasando por la definición de historias de usuario, specs y pruebas, hasta la gobernanza del proceso con integraciones (MCP, Figma), automatizaciones y optimización de contexto/tokens. Los dos primeros laboratorios construyen aplicaciones; el tercero y el cuarto cubren el ecosistema de *skills* y la optimización de SDD. El quinto es un ejercicio guiado de 4 horas (2 horas por día, 2 días) con [SDD Devkit](https://github.com/juanca202/sdd-devkit): parte de un SRS ya cerrado, lo planifica, lo implementa y lo integra en `main`, en un proyecto distinto al de los laboratorios anteriores. El sexto ocupa tres bloques (días 6, 7 y 8) sobre HelpDesk Lite: el grupo recibe el PRD y recorre el ciclo por su cuenta, en un multirepo de interfaz y API.

Los laboratorios 1 a 4 se siguen en orden. El laboratorio 5 se puede hacer al terminar el 1, cuando SDD Devkit ya está instalado. El laboratorio 6 sigue al 5. El laboratorio 7 se puede hacer con SDD Devkit instalado; crea su propio proyecto de pruebas.

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

Cubre la optimización y la gobernanza del proceso SDD: el rol de `/work-research` para documentar decisiones, el uso de **workflows** multiagente con fases frente a la orquestación simple de subagentes, e integraciones para llevar SDD a producción: **CodeGraph** para indexar el proyecto como grafo de conocimiento consultable, **Headroom** como proxy de optimización de tokens comprimiendo salidas de herramientas, y **Langfuse** para observabilidad de las interacciones con LLM.

### [Laboratorio 5: Transferencia de archivos por QR](./lab-005-transferencia-qr.md)

Ejercicio guiado de **2 horas por día, durante 2 días**, sobre un requerimiento ya escrito (SRS-001, transferencia de un archivo mediante una secuencia de QR). El día 1 copia el SRS en una carpeta en blanco y recorre `/requirement-refine`, `/work-define`, `/arch-init` y `/work-plan`. El día 2 implementa las tres historias con `/work-implement`, las integra en `main` con `/work-integrate` y prueba la transmisión abriendo la app en un teléfono. Los casos de prueba documentados (`/test-define`) quedan fuera.

### [Laboratorio 6: HelpDesk Lite](./lab-006-helpdesk.md)

Ejercicio de **tres bloques** (1 h 45 min, 1 h 50 min y 1 h 50 min) sobre [PRD-helpdesk.md](./assets/PRD-helpdesk.md). El día 6 prepara el multirepo y acuerda modelo, contrato, wireframes e historias. El día 7 implementa los datos de demostración, el registro y la consulta. El día 8 completa el detalle, los comentarios, los estados y el dashboard, integra y contrasta el resultado con los criterios del PRD. El grupo cierra las decisiones que el PRD deja abiertas.

### [Laboratorio 7: Automatización de pruebas](./lab-007-automatizacion-pruebas.md)

`/arch-init` crea un proyecto de pruebas desde un proyecto base para un sistema alojado en Azure DevOps. Después `/work-define sync` trae desde ese tracker una historia ya cerrada (referencia: [user-story-sample.md](./assets/user-story-sample.md), US-001 *Acceso demo de la aplicación*) y se lleva a pruebas automatizadas: `/test-define` deriva los casos de prueba de los criterios AC-001 a AC-011, `/work-implement` los automatiza 1:1 en una rama `test/`, y `/quality-check` y `/coverage-verify` dejan la matriz de cobertura antes de integrar con `/work-integrate`.

---

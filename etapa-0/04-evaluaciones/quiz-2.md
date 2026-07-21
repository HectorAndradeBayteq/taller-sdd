# Quiz: Laboratorios To-Do App y Configuración

Quiz de repaso sobre portabilidad de configuración entre agentes y preparación del AI Harness en el laboratorio To-Do App.

> 4 preguntas de opción múltiple, una sola respuesta correcta por pregunta.

---

## Pregunta 1

**¿Cuál es el archivo equivalente a `AGENTS.md` de Cursor en Claude Code?**

- **A.** `.mcp.json`
- **B.** `.claude.json`
- **C.** `SKILL.md`
- **D.** `CLAUDE.md` ✅

**Respuesta correcta: D.** `AGENTS.md` contiene instrucciones de proyecto para Cursor; para trasladar ese comportamiento a Claude Code se crea el archivo equivalente `CLAUDE.md`.

---

## Pregunta 2

**¿Por qué es preferible usar una referencia `@path` en `CLAUDE.md` en lugar de copiar el contenido de otro archivo de instrucciones?**

- **A.** Porque evita que Claude lea el archivo referenciado.
- **B.** Porque mantiene una única fuente de verdad: al actualizar el archivo referenciado, Claude cargará la versión actual sin duplicar ni desincronizar contenido. ✅
- **C.** Porque las referencias `@path` solo funcionan con archivos `.json`.
- **D.** Porque elimina el consumo de tokens de contexto.

**Respuesta correcta: B.** `@path` importa el contenido del archivo al iniciar la sesión y mantiene las instrucciones en su ubicación original. Esto evita duplicarlas y reduce el riesgo de inconsistencias. El contenido importado sí consume contexto.

---

## Pregunta 3

**¿Para qué se utiliza `npx autoskills`?**

- **A.** Para sugerir skills compatibles y útiles para el stack tecnológico del proyecto. ✅
- **B.** Para ejecutar automáticamente las pruebas del proyecto.
- **C.** Para generar los ADRs base del repositorio.
- **D.** Para convertir el proyecto a Specification-Driven Development.

**Respuesta correcta: A.** `npx autoskills` ayuda a identificar skills que pueden mejorar el desarrollo según el stack utilizado. Después deben evaluarse para evitar conflictos, redundancias o skills innecesarias.

---

## Pregunta 4

**¿Cuál es el objetivo principal de ejecutar `/adr-audit`?**

- **A.** Crear automáticamente nuevos ADRs para cada componente.
- **B.** Reemplazar las pruebas unitarias y E2E del proyecto.
- **C.** Instalar las skills requeridas por el stack tecnológico.
- **D.** Verificar que el código base cumpla los ADRs y las instrucciones de `AGENTS.md`, generando un informe priorizado de hallazgos. ✅

**Respuesta correcta: D.** `/adr-audit` valida la coherencia entre las decisiones arquitectónicas, las instrucciones persistentes y el estado real del repositorio; genera un informe priorizado en `docs/adr/audits/`.

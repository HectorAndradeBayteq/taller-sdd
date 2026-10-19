# Quiz 3 — MCP, OpenSpec y Superpowers

Quiz de repaso sobre el concepto y la configuración de **Model Context Protocol (MCP)**, y sobre los flujos de trabajo de implementación con **OpenSpec** y **Superpowers**.

> 4 preguntas de opción múltiple, una sola respuesta correcta por pregunta.

---

## Pregunta 1

**¿Qué describe mejor la función de MCP dentro del AI Harness?**

- **A.** Es un modelo de lenguaje especializado que reemplaza al agente de Cursor, Claude o cualquiera otro.
- **B.** Estandariza cómo un agente descubre e invoca herramientas y recursos expuestos por servidores externos o internos. ✅
- **C.** Es una biblioteca que debe incorporarse al código de la aplicación para ejecutar pruebas E2E.
- **D.** Permite que el modelo controle aplicaciones externas directamente, sin intervención del cliente ni de otro proceso.

**Respuesta correcta: B.** MCP define un contrato para que el cliente invoque herramientas con nombres, parámetros y tipos conocidos. En el laboratorio, Cursor orquesta la llamada, el servidor `chrome-devtools-mcp` interactúa con Chrome y el resultado vuelve al agente como contexto.

---

## Pregunta 2

**¿Cuál es la forma correcta de configurar Chrome DevTools MCP a nivel de proyecto en Cursor?**

- **A.** Agregar `chrome-devtools-mcp` como dependencia de producción en `package.json` y registrarlo en `AGENTS.md`.
- **B.** Crear `.cursor/mcp.json`, declarar el servidor dentro de `mcpServers` con `command: "npx"` y `args: ["-y", "chrome-devtools-mcp@latest"]`, y comprobarlo en **Cursor Settings → MCP**. ✅
- **C.** Crear `target-url.txt` con el nombre del servidor y reiniciar el proyecto con `npm start`.
- **D.** Añadir `/mcp chrome-devtools` a `CLAUDE.md`; Cursor genera automáticamente el archivo de configuración.

**Respuesta correcta: B.** La configuración compartida del laboratorio vive en `.cursor/mcp.json`. Cursor la carga al abrir la carpeta como workspace y arranca el servidor mediante `npx` cuando el agente necesita utilizar sus herramientas.

---

## Pregunta 3

**¿Qué hace `/openspec-apply-change` dentro del flujo de trabajo de OpenSpec?**

- **A.** Convierte una historia de usuario en una nueva propuesta y genera la spec inicial.
- **B.** Implementa las tareas pendientes de un cambio OpenSpec, leyendo sus artefactos de contexto, actualizando el progreso y deteniéndose si encuentra ambigüedades o bloqueos. ✅
- **C.** Archiva el cambio terminado y sincroniza automáticamente sus especificaciones con las del proyecto.
- **D.** Compara varias alternativas de diseño y solicita aprobación antes de escribir una spec.

**Respuesta correcta: B.** `/openspec-apply-change` corresponde a la fase de implementación. Trabaja sobre un cambio ya definido, ejecuta sus tareas de forma incremental y marca cada tarea completada. La propuesta se crea antes con `/openspec-propose` y el archivado del cambio se realiza después con `/openspec-archive-change`.

---

## Pregunta 4

**¿Cuál es el propósito principal de `/brainstorming` antes de ejecutar `/writing-plans`?**

- **A.** Implementar inmediatamente el requerimiento y corregir el diseño después de ejecutar las pruebas.
- **B.** Explorar el contexto, aclarar requisitos y restricciones, comparar alternativas y convertir la idea en un diseño o spec validado por el usuario antes de planificar la implementación. ✅
- **C.** Transformar una spec aprobada en una lista detallada de archivos, comandos y tareas de implementación.
- **D.** Ejecutar un plan existente, actualizar el código y marcar automáticamente las tareas completadas.

**Respuesta correcta: B.** `/brainstorming` evita comenzar a programar con supuestos no validados. Primero refina la intención y los criterios de éxito, propone enfoques con sus trade-offs, presenta el diseño para aprobación y documenta la spec. Solo después transfiere el trabajo a `/writing-plans`.

---

**Volver al índice:** [Taller SDD](../../README.md)

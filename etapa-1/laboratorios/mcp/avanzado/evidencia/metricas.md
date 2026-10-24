# Métricas de sesiones del agente

> Generado automáticamente por `.cursor/hooks/metrics.mjs` (no lo edites a mano: se sobrescribe).
> Última actualización: 20/10/2026, 10:03:50 a. m..
> **No incluye tokens:** los hooks no los reciben. Anótalos desde el panel Context en `evidencia/informe.md`.

| # | Chat | Etiqueta | Modelo | Tool calls | Read | Archivos distintos | Búsquedas | Shell | MCP (por servidor) | Subagentes (tool calls) | Fallos | Tiempo (s) | Estado |
|---|------|----------|--------|-----------:|-----:|-------------------:|----------:|------:|--------------------|------------------------:|-------:|-----------:|--------|
| 1 | 464ad3a6 | — | — | 1 | 0 | 0 | 0 | 1 | — | 0 (0) | 0 | 47.4 | completed |
| 2 | 4a8a97f7 | con-codegraph | — | 2 | 0 | 0 | 0 | 0 | codegraph×2 | 0 (0) | 0 | 27.3 | completed |

### Cómo leerla

- **Tool calls**: todas las herramientas invocadas por el agente (lectura, búsqueda, shell, MCP, edición…).
- **Read / Archivos distintos**: lecturas con la herramienta `Read` y cuántos archivos diferentes abrió.
- **MCP (por servidor)**: llamadas a cada servidor MCP; `codegraph×N` indica cuántas veces usó el grafo.
- **Subagentes (tool calls)**: subagentes lanzados y las llamadas que hicieron internamente. Pueden ya estar incluidas en *Tool calls*; no las sumes.
- **Tiempo**: desde que envías el prompt hasta que el agente termina; incluye esperas de aprobación manual.
- Compara solo filas con el **mismo modelo** y el mismo prompt.

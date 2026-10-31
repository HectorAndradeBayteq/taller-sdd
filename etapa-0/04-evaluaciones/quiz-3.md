# Quiz: Skills, contexto y flujo de especificaciones

Quiz de repaso sobre la anatomía de las skills, la gestión del contexto y el flujo de definición de pruebas y especificaciones con OpenSpec.

> 4 preguntas de opción múltiple, una sola respuesta correcta por pregunta.

---

## Pregunta 1

**¿Cuáles son las dos partes principales de un archivo `SKILL.md` y qué función cumple cada una?**

* **A.** El directorio `scripts/`, que contiene las instrucciones, y el directorio `assets/`, que determina cuándo ejecutar la skill.
* **B.** El *frontmatter* YAML, que contiene metadatos como `name` y `description`, y el cuerpo Markdown, que define las instrucciones que debe seguir el agente. ✅
* **C.** El archivo `AGENTS.md`, que define el comando, y el archivo `CLAUDE.md`, que contiene su implementación.
* **D.** El manifiesto JSON, que registra la skill, y el servidor MCP, que ejecuta todas sus instrucciones.

**Respuesta correcta: B.** Toda skill requiere un archivo `SKILL.md`. Su *frontmatter* permite identificarla y determinar cuándo resulta pertinente, mientras que el cuerpo Markdown contiene el procedimiento, las reglas y el formato de salida. Los directorios `scripts/`, `references/` y `assets/` son recursos opcionales, no las dos partes principales.  

---

## Pregunta 2

**Según el taller, ¿cuál es la diferencia principal entre la ventana de contexto y la ventana de atención?**

* **A.** La ventana de contexto contiene únicamente el historial del chat, mientras que la ventana de atención contiene únicamente los archivos del repositorio.
* **B.** La ventana de contexto y la ventana de atención son dos nombres para el mismo límite técnico de tokens.
* **C.** La ventana de contexto es el espacio finito de tokens disponible para instrucciones, herramientas, reglas, skills e historial; la ventana de atención representa la capacidad efectiva del modelo para priorizar correctamente la información relevante dentro de ese contexto. ✅
* **D.** La ventana de atención determina cuántas herramientas pueden instalarse y la ventana de contexto determina cuántas respuestas puede generar el agente.

**Respuesta correcta: C.** El contexto es el presupuesto total de información enviado al modelo. La atención se refiere a qué tan bien logra utilizar y priorizar esa información; por eso el comportamiento puede perder precisión incluso antes de alcanzar el límite máximo de contexto, especialmente cuando existe demasiado ruido, historial o configuración innecesaria.  

---

## Pregunta 3

**¿Cuál es el propósito principal de ejecutar `/test-define` después de definir las historias de usuario?**

* **A.** Generar casos de prueba a partir de los criterios de aceptación, contemplando escenarios exitosos, errores y casos límite, y relacionarlos para mantener la trazabilidad. ✅
* **B.** Ejecutar automáticamente todas las pruebas unitarias y E2E existentes y bloquear el despliegue cuando alguna falla.
* **C.** Transformar el requerimiento inicial en historias de usuario y calcular sus *story points*.
* **D.** Implementar el código de producción necesario para que los criterios de aceptación se cumplan.

**Respuesta correcta: A.** `/test-define` se utiliza para definir los casos de prueba asociados a las historias y sus criterios de aceptación. No ejecuta el *quality gate* ni implementa las pruebas automáticamente: primero produce los artefactos de prueba que posteriormente pueden vincularse con pruebas unitarias, de integración o E2E como evidencias de cumplimiento.  

---

## Pregunta 4

**¿Qué diferencia existe entre `/openspec-propose` y `/openspec-explore`?**

* **A.** `/openspec-propose` implementa el código, mientras que `/openspec-explore` ejecuta las pruebas de la implementación.
* **B.** `/openspec-propose` se utiliza para descubrir dudas del requerimiento, mientras que `/openspec-explore` genera directamente la propuesta sin hacer preguntas.
* **C.** Ambos producen exactamente el mismo resultado; la única diferencia es que uno se instala globalmente y el otro a nivel de proyecto.
* **D.** `/openspec-propose` genera directamente una propuesta de cambio y su especificación a partir de una entrada suficientemente definida; `/openspec-explore` se usa antes cuando es necesario analizar alternativas, identificar lagunas y resolver decisiones pendientes. ✅

**Respuesta correcta: D.** `propose` es apropiado cuando la historia de usuario ya contiene el contexto necesario para generar la propuesta. `explore` añade una etapa de razonamiento y aclaración para cubrir ambigüedades antes de consolidar la especificación y continuar con la propuesta de cambio.

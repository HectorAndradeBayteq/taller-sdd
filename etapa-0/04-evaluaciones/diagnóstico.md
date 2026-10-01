# Diagnóstico previo: IA aplicada al desarrollo y Spec-Driven Development

*Este cuestionario no es un examen. Sirve para ajustar el contenido de los talleres a tu nivel real. Si no conoces un concepto, marca la opción que más se acerque o "No lo sé"; esa respuesta es igual de útil.*

## Sección 1 — Perfil

**1. ¿Cuál es tu rol principal en el equipo?**
- a) Desarrollador backend
- b) Desarrollador frontend / móvil
- c) Full stack
- d) QA / Automatización de pruebas
- e) Arquitecto / Líder técnico
- f) Otro

**2. ¿Cuántos años de experiencia tienes en desarrollo de software?**
- a) Menos de 2
- b) Entre 2 y 5
- c) Entre 5 y 10
- d) Más de 10

**3. ¿Con qué frecuencia usas herramientas de IA en tu trabajo diario?**
- a) Nunca o casi nunca
- b) Ocasionalmente (una vez por semana o menos)
- c) Varias veces por semana
- d) Todos los días; es parte central de mi forma de trabajar

**4. ¿Cómo describirías tu nivel de uso de IA para desarrollar?**
- a) Explorador: la he probado pero no la uso de forma regular
- b) Básico: uso chat o autocompletado para dudas y fragmentos de código
- c) Intermedio: uso agentes en el IDE que editan varios archivos y ejecutan comandos
- d) Avanzado: configuro reglas, skills, servidores MCP o flujos para mi equipo

## Sección 2 — Herramientas y prácticas actuales

**5. ¿Cuáles de estas herramientas has usado? (puedes marcar varias)**
- a) Chat web (ChatGPT, Claude, Gemini, etc.)
- b) GitHub Copilot
- c) Cursor
- d) Claude Code
- e) Otras CLI o IDEs con agentes (Codex, Kiro, Windsurf, etc.)
- f) Ninguna

**6. ¿Para qué usas principalmente la IA? (puedes marcar varias)**
- a) Generar código nuevo
- b) Depurar errores
- c) Escribir pruebas
- d) Documentar o entender código existente / legado
- e) Revisar código o Pull Requests
- f) Diseño técnico o decisiones de arquitectura

**7. ¿Qué forma de interacción usas con más frecuencia?**
- a) Autocompletado mientras escribo
- b) Chat de pregunta-respuesta, copiando y pegando código
- c) Modo agente que modifica archivos y ejecuta comandos en mi proyecto
- d) Varios agentes en paralelo o en segundo plano (background / cloud agents)

**8. ¿Cómo validas el código que genera la IA antes de integrarlo?**
- a) Si compila y parece funcionar, lo acepto
- b) Lo reviso manualmente línea por línea
- c) Lo reviso y además lo respaldo con pruebas automatizadas
- d) Pasa por una compuerta de calidad definida (tipado, linter, pruebas, build) además de revisión

**9. ¿Has trabajado con archivos de instrucciones persistentes para agentes (por ejemplo `AGENTS.md`, `CLAUDE.md` o reglas en `.cursor/rules`)?**
- a) No sé qué son
- b) Los conozco, pero no los he usado
- c) He trabajado en proyectos que ya los tenían
- d) Los creo y los mantengo yo mismo

**10. ¿Cuál es tu principal preocupación sobre el uso de IA en el desarrollo?**
- a) La calidad y los errores sutiles en el código generado
- b) La seguridad y la privacidad del código o de los datos
- c) Perder habilidades o volverme dependiente de la herramienta
- d) Que en la práctica no ahorra tanto tiempo como se promete

## Sección 3 — Conceptos de desarrollo asistido por IA

**11. ¿Qué es la "ventana de contexto" de un modelo?**
- a) La memoria permanente que el modelo guarda sobre tu proyecto
- b) La cantidad máxima de información (en tokens) que el modelo puede considerar en una interacción
- c) El número de archivos del repositorio que el IDE indexa
- d) No lo sé

**12. ¿Por qué un agente en el IDE no "ve" todo el repositorio a la vez?**
- a) Por seguridad, los agentes nunca leen archivos del respositorio para evitar filtración de información
- b) El contexto es limitado y la herramienta selecciona o recupera solo los fragmentos relevantes
- c) Solo puede leer el archivo que tienes abierto
- d) No lo sé

**13. En un flujo multiagente, ¿qué es un subagente?**
- a) Una versión más pequeña y barata del modelo capaz de resolver tareas puntuales
- b) Un agente al que un coordinador delega una tarea acotada, con su propio contexto e instrucciones
- c) Un plugin de autocompletado que puede ser utilizado solo en el archivo actual
- d) No lo sé

**14. ¿Qué es una *skill* en herramientas como Claude Code o Cursor?**
- a) Una extensión del marketplace del IDE que puede ser utilizada por los agentes 
- b) Un paquete versionable de instrucciones y scripts que el agente carga cuando la tarea lo requiere
- c) Un reentrenamiento (fine-tuning) del modelo para que se adapte a las necesidades del equipo pero no es necesario para el uso de los agentes
- d) No lo sé

**15. ¿Qué es MCP (Model Context Protocol)?**
- a) Un formato recomendado para redactar prompts
- b) Un protocolo estándar para conectar agentes con herramientas y fuentes de datos externas
- c) Una métrica para medir el consumo de tokens pero no es necesario para el uso de los agentes
- d) No lo sé

**16. En el contexto de agentes de código, ¿qué es un *hook*?**
- a) Un script que se ejecuta automáticamente antes o después de eventos del agente 
- b) Una plantilla de prompt reutilizable que se usa para optimizar el uso de los agentes
- c) Un webhook de GitHub que dispara el pipeline de CI
- d) No lo sé

**17. ¿Qué es una inyección de prompt indirecta?**
- a) Cuando el propio usuario escribe un prompt malicioso vía línea de comandos para auditar el harness del agente 
- b) Instrucciones maliciosas que intentan cambiar el comportamiento del agente y que están ocultas en contenido que el agente lee
- c) Cuando el modelo inventa información (alucina) que corresponde a la naturaleza no determinista de los modelos de IA
- d) No lo sé

## Sección 4 — Spec-Driven Development (SDD)

**18. ¿Cuál es la idea central del Spec-Driven Development?**
- a) Escribir el código primero y documentarlo al final, siendo el código la única fuente de verdad de la implementación
- b) La especificación es el artefacto central que guía la implementación, las pruebas y la verificación
- c) Dejar que la IA genere las especificaciones sin revisión humana
- d) No lo sé

**19. ¿Qué tan familiarizado estás con frameworks de specs (Spec Kit, OpenSpec, AgentOS, Superpowers, specs de Kiro u otros)?**
- a) No conozco ninguno
- b) He oído hablar de alguno
- c) He probado alguno en ejercicios o pruebas personales
- d) Uso alguno en proyectos reales

**20. ¿Qué es un ADR (Architecture Decision Record)?**
- a) Un documento que registra una decisión de arquitectura con su contexto, alternativas y consecuencias
- b) Un reporte de auditoría de código generado solo por arquitectos de software
- c) Un tipo de historia de usuario técnica
- d) No lo sé

**21. ¿Qué relación hay entre los criterios de aceptación de una historia y los casos de prueba?**
- a) Ninguna; se definen por separado
- b) Los casos de prueba se derivan de los criterios de aceptación para verificar que la historia se cumple
- c) Los casos de prueba reemplazan a los criterios de aceptación
- d) No lo sé

**22. ¿Qué es una compuerta de calidad (*quality gate*)?**
- a) La aprobación manual de un líder técnico para que el cambio sea integrado en el repositorio
- b) Un conjunto de verificaciones automáticas que el cambio debe superar antes de integrarse
- c) La aprobación del cliente al final del sprint
- d) No lo sé

**23. En un flujo SDD con agentes, ¿cómo se reparten las responsabilidades entre la persona y el agente?**
- a) El agente toma las decisiones de negocio y de arquitectura mientras que la persona se encarga de la implementación del código y pruebas
- b) La persona define la intención, las restricciones y las decisiones importantes; el agente resuelve los detalles dentro de esos límites
- c) El agente solo sugiere y la persona escribe todo el código
- d) No lo sé

## Sección 5 — Expectativas

**24. ¿Qué formato de taller te resultaría más útil?**
- a) Principalmente teórico, con demostraciones del instructor
- b) Principalmente práctico, con laboratorios guiados paso a paso
- c) Mixto: conceptos cortos seguidos de práctica
- d) Práctica sobre un proyecto real del equipo

**25. (Abierta)** Describe una tarea reciente en la que usaste IA para desarrollar. ¿Qué funcionó bien y qué no?

**26. (Abierta)** ¿Qué obstáculos (técnicos, de políticas de la empresa, de seguridad, de tiempo) te impiden hoy usar más la IA en tu trabajo?

**27. (Abierta)** ¿Cómo gestiona hoy tu equipo los requerimientos y la documentación técnica (historias de usuario, decisiones de arquitectura, casos de prueba) y qué problemas ves en ese proceso?

**28. (Abierta)** ¿Qué te gustaría poder hacer al terminar los talleres que hoy no puedes hacer?

**29. (Abierta)** ¿Hay algún tema que quieras que se profundice especialmente, o alguno que consideres que no aporta a tu trabajo?

**30. (Abierta)** ¿Tienes algún escenario dentro de tu actividad diaria donde aún no se ha intentado usar la IA para mejorarlo?

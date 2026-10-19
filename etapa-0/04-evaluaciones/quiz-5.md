# Quiz 5 — Etapa 1: Hooks y flujo práctico con Superpowers

Quiz de cierre de la sesión. Repasa los conceptos de **hooks en Cursor** y el flujo práctico de implementación y validación con **Superpowers**.

> 4 preguntas de opción múltiple, una sola respuesta correcta por pregunta.

---

## Pregunta 1

**¿Cuál describe mejor el propósito de un hook dentro del bucle de un agente de IA?**

- **A.** Reemplazar el modelo de IA por scripts deterministas.
- **B.** Observar, controlar o ampliar la ejecución del agente en eventos concretos de su ciclo de vida. ✅
- **C.** Guardar únicamente el historial de mensajes del usuario.
- **D.** Ejecutar todas las herramientas sin aplicar restricciones.

**Respuesta correcta: B.** Un hook funciona como middleware del agente: se activa antes o después de eventos específicos para registrar actividad, bloquear acciones, modificar entradas o encadenar pasos. No reemplaza al modelo; añade puntos de control alrededor de su ejecución.

---

## Pregunta 2

**¿Cuál es la diferencia correcta entre un hook de tipo `command` y uno de tipo `prompt`?**

- **A.** `command` usa un LLM y `prompt` ejecuta un script local.
- **B.** `command` solo sirve para hooks posteriores y `prompt` solo para hooks previos.
- **C.** `command` ejecuta un script que procesa JSON de forma determinista; `prompt` delega a un LLM la evaluación de una política expresada en lenguaje natural. ✅
- **D.** No existe una diferencia funcional; ambos nombres son alias.

**Respuesta correcta: C.** Los hooks `command` reciben JSON por `stdin`, ejecutan lógica programada y devuelven JSON por `stdout`, por lo que son adecuados para políticas fijas y auditables. Los hooks `prompt` usan un LLM para interpretar reglas en lenguaje natural, lo que ofrece flexibilidad, pero menos determinismo.

---

## Pregunta 3

**¿Qué ventaja aporta usar un Git worktree durante una implementación con Superpowers?**

- **A.** Copia también todos los cambios sin commit y las dependencias ignoradas del proyecto.
- **B.** Permite trabajar en una copia aislada asociada a otra rama, evitando interferir con el directorio principal y facilitando ejecuciones paralelas. ✅
- **C.** Elimina la necesidad de integrar los cambios al finalizar.
- **D.** Garantiza que cualquier cantidad de subagentes pueda modificar los mismos archivos sin conflictos.

**Respuesta correcta: B.** Un worktree crea un espacio de trabajo separado sobre una referencia de Git, lo que permite que un agente implemente y pruebe cambios sin alterar el directorio principal. Los cambios sin commit no se trasladan automáticamente y las dependencias ignoradas, como `node_modules`, normalmente deben instalarse en cada worktree.

---

## Pregunta 4

**¿Qué hace `trace validate` dentro del flujo de validación mostrado en la sesión?**

- **A.** Comprueba únicamente que el proyecto compile y que el lint no tenga errores.
- **B.** Compara una historia de usuario y sus criterios de aceptación con casos de prueba y artefactos de evidencia para determinar su cobertura y emitir un veredicto. ✅
- **C.** Crea automáticamente un pull request sin revisar el código.
- **D.** Sustituye el code review y corrige cualquier problema arquitectónico por sí solo.

**Respuesta correcta: B.** `trace validate` valida la trazabilidad por historia de usuario: relaciona cada criterio de aceptación con pruebas y evidencias, indica si está cubierto y automatizado, y genera un veredicto. Debe ejecutarse después del code review, porque la revisión técnica y las pruebas del código deben estar aprobadas antes de cerrar la trazabilidad funcional.

---

**Volver al índice:** [Etapa 1](../README.md)

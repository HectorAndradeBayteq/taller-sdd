# Quiz 1 — Etapa 0: IA y Desarrollo de Software

Quiz de cierre de la Etapa 0. Repasa los tres bloques de la sesión teórica: **Vibe Coding**, **Spec-Driven Development (SDD)** y **Harness Engineering**.

> 4 preguntas de opción múltiple, una sola respuesta correcta por pregunta.

---

## Pregunta 1

**¿Cuál es el cambio más importante que introduce SDD frente al vibe coding?**

- **A.** Hace que el desarrollo sea más lento, pero más documentado.
- **B.** Cambia el punto de partida: de un prompt improvisado a una spec verificable. ✅
- **C.** Elimina la necesidad de pruebas porque la spec ya define todo.
- **D.** Obliga a que toda funcionalidad se diseñe con arquitectura formal.

**Respuesta correcta: B.** En vibe coding el agente decide el qué y el cómo a partir de un prompt improvisado; en SDD el "qué" vive en una spec explícita y el resultado es verificable contra ella. La velocidad de la IA se mantiene — lo que cambia es el punto de partida.

---

## Pregunta 2

**¿Por qué una spec con criterios vagos puede ser peligrosa al trabajar con agentes de IA?**

- **A.** Porque el agente no podrá leer archivos largos.
- **B.** Porque el agente podría implementar algo que parece correcto, pero que no puede verificarse objetivamente. ✅
- **C.** Porque obliga al agente a escribir menos código.
- **D.** Porque reemplaza los ADRs y las reglas del proyecto.

**Respuesta correcta: B.** Es el antipatrón de "Acceptance Criteria vaga": si un criterio no es observable, medible y binario (pass/fail), lo esperado no es lo implementado — y si no se puede verificar, no se puede aceptar.

---

## Pregunta 3

**¿Cuál es la función principal del harness alrededor de un agente de IA?**

- **A.** Mejorar el modelo base para que sea más inteligente.
- **B.** Darle al agente entorno, contexto, reglas, herramientas y mecanismos de verificación. ✅
- **C.** Convertir cualquier prompt en código automáticamente.
- **D.** Evitar que el desarrollador revise el resultado final.

**Respuesta correcta: B.** El harness no cambia el modelo: es el andamiaje que lo rodea — herramientas, reglas, sensores de verificación y puntos de intervención humana. `Agente = Modelo + Harness`; el mismo modelo puede rendir hasta 6× según el harness que lo envuelve.

---

## Pregunta 4

**¿Cuál es la relación correcta entre spec y harness?**

- **A.** La spec reemplaza al harness porque ya contiene toda la información del proyecto.
- **B.** El harness reemplaza a la spec porque automatiza la implementación.
- **C.** La spec vive dentro del harness como guía del QUÉ; el harness añade contexto, límites, herramientas y sensores para ejecutar y verificar. ✅
- **D.** La spec solo sirve para documentación humana, mientras el harness es solo técnico.

**Respuesta correcta: C.** La spec es el contrato del QUÉ y es una de las piezas del pilar de repositorio/memoria del harness. El harness la complementa con contexto, guardrails, herramientas y bucles de verificación para que el agente ejecute y compruebe su trabajo de extremo a extremo.

---

**Volver al índice:** [Etapa 0](../README.md)

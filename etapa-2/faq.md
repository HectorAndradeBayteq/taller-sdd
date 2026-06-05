# FAQ — Etapa 2 (SDD)

Preguntas frecuentes del taller de **Specification-Driven Development**. Consulta este documento durante los laboratorios cuando tengas dudas sobre insumos, especificación o el flujo con Speckit.

---

## Índice

- [Preparación e insumos](#preparación-e-insumos)
- [Especificación y clarificación](#especificación-y-clarificación)
- [Validación e implementación](#validación-e-implementación)
- [Uso de Spec Kit](#uso-de-spec-kit)

---

## Preparación e insumos

### ¿Qué recursos debo revisar antes de comenzar la especificación?

Antes de invocar `/speckit-specify`, asegúrate de tener a mano:

- Documento de requerimientos o historia de usuario.
- Prototipos de alta fidelidad (Figma) o wireframes, según el nivel de detalle disponible.
- Sistema de diseño (p. ej. [`assets/DESIGN.md`](assets/DESIGN.md)).
- ADRs existentes en `docs/adr/`.
- Convenciones y estándares del proyecto (`AGENTS.md`, reglas del repo, etc.).

> **Tip:** Cuanto más completo sea el contexto que adjuntes al comando, menos ambigüedad quedará en la spec generada.

### ¿Se pueden usar prototipos de alta fidelidad para crear la especificación?

**Sí, y es lo ideal y recomendable.** Los prototipos de alta fidelidad (p. ej. en Figma con componentes, estados y flujos enlazados) aportan el mayor nivel de detalle para generar una spec precisa:

- Layout, jerarquía visual y composición por pantalla.
- Estados de la interfaz (vacío, carga, error, éxito).
- Interacciones y transiciones entre vistas.
- Componentes reutilizables ya nombrados en el diseño.

Inclúyelos en `/speckit-specify` junto con el requerimiento. En los laboratorios de banca móvil (ejercicios 2 en adelante) el enlace de Figma cumple este rol.

### ¿Los wireframes forman parte de los insumos para generar la especificación?

**Sí.** Los wireframes son útiles para identificar funcionalidades, flujos de usuario y criterios de aceptación, **especialmente cuando ya existe un sistema de diseño bien definido** (p. ej. [`DESIGN.md`](assets/DESIGN.md) con tokens, tipografía y patrones de componentes).

En ese escenario, el wireframe fija el **layout y la composición** sin repetir decisiones visuales que el sistema de diseño ya resuelve — como en el [Ejercicio 1: Time Tracker](greenfield/LB-001-time-tracker.md). Inclúyelos en `/speckit-specify` junto con el requerimiento y el documento de diseño.

> **Resumen:** prototipos de alta fidelidad cuando necesitas máximo detalle visual e interacción; wireframes + sistema de diseño cuando la capa visual ya está estandarizada.

### ¿Cómo sé si necesito crear ADRs antes de escribir la especificación?

Revisa si existen **decisiones arquitectónicas relevantes** que aún no estén documentadas, por ejemplo:

- Stack o bibliotecas clave (p. ej. persistencia, UI, routing).
- Patrones de diseño o estructura de carpetas.
- Modelo de datos o estrategia de integración entre componentes.

Si la implementación depende de esas decisiones y no hay ADR que las registre, conviene crearlas **antes** de planificar o implementar. En el taller puedes usar el skill `/adr-manage`.

---

## Especificación y clarificación

### ¿Cómo identifico requisitos faltantes en una especificación?

Compara la spec contra estos insumos:

1. **Flujos de usuario** — ¿cada camino feliz y cada error están cubiertos?
2. **Wireframes y diseños** — ¿cada pantalla, modal o estado tiene criterio de aceptación?
3. **Reglas de negocio** — ¿hay validaciones, límites o restricciones implícitas no escritas?

Si detectas huecos, resuélvelos en `/speckit-clarify` antes de avanzar.

### ¿Qué hacer si la especificación tiene información ambigua o incompleta?

**No avances a planificación ni implementación** hasta resolver las dudas. Usa `/speckit-clarify` para:

- Precisar alcance, nombres de componentes o comportamientos.
- Añadir criterios de aceptación faltantes.
- Alinear la spec con diseño (wireframes, Figma, `DESIGN.md`).

Una spec ambigua produce planes inconsistentes y código que hay que rehacer.

---

## Validación e implementación

### ¿Cómo verificar que la implementación cumple con lo solicitado?

Valida en dos niveles:

1. **Criterios de aceptación** — recorre cada ítem de la spec y confirma que el comportamiento en la app lo satisface.
2. **Pruebas automatizadas** — ejecuta la suite del proyecto y verifica que cubra los escenarios críticos definidos en la especificación.

En laboratorios con varias tareas, ejecuta también `/speckit-analyze` **antes** de implementar para detectar desalineaciones entre spec, plan y tareas.

---

## Uso de Spec Kit

### ¿Cuál es el flujo recomendado de trabajo con Spec Kit?

Sigue este orden en cada ejercicio:

| Orden | Comando | Propósito |
| --- | --- | --- |
| 1 | `/speckit-specify` | Crear la especificación a partir del requerimiento e insumos de diseño. |
| 2 | `/speckit-clarify` | Resolver ambigüedades y refinar la spec antes de planificar. |
| 3 | `/speckit-plan` | Generar el plan técnico de implementación. |
| 4 | `/speckit-tasks` | Descomponer el plan en tareas concretas. |
| 5 | `/speckit-analyze` | Revisar coherencia entre spec, plan y tareas. |
| 6 | `/speckit-implement` | Ejecutar la implementación guiada por la spec. |

Después de implementar, cierra el ciclo con `/git-commit` y `/git-pr` según indique cada laboratorio.

> **Referencia:** diagrama del flujo en [README — Flujo Speckit](README.md#flujo-speckit) y en los ejercicios de [greenfield](greenfield/).

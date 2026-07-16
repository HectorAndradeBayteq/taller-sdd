# Vibe Coding

Antes de hablar de Spec-Driven Development conviene entender el punto de partida: la forma más común e intuitiva de programar con IA hoy. **Vibe Coding** es el nombre que se le ha dado a ese estilo de trabajo, y entenderlo — con sus ventajas y sus límites — es lo que justifica por qué existe SDD.

---

## Antecedentes

### ¿De dónde viene el término?

El término lo popularizó **Andrej Karpathy** (co-fundador de OpenAI, ex-líder de IA en Tesla) para describir una forma de programar donde el desarrollador se deja llevar por la intuición y el LLM, sin detenerse a especificar formalmente qué se quiere construir.

> **Vibe coding** = programar guiado por intuición + prompts rápidos al LLM, sin una especificación formal previa.

### ¿Qué lo caracteriza?

- **Iteración rápida** basada en "probar y ver qué sale" — se escribe un prompt, se revisa el resultado, se ajusta.
- **Dependencia alta del LLM** — buena parte de las decisiones de diseño e implementación quedan en manos del modelo.
- **No requiere documentación estructurada** — no hay un artefacto previo que capture el alcance o las reglas.
- **Decisiones implícitas** — lo que el modelo decidió (qué casos cubrir, qué librería usar, qué validar) no queda registrado en ningún lado; vive solo en el código generado.

### ¿Dónde funciona bien?

Vibe coding no es "malo" en sí mismo — es una herramienta con un dominio de aplicación claro:

| Escenario | Por qué encaja |
|---|---|
| Prototipos rápidos y pruebas de concepto | El objetivo es validar una idea, no construir para producción |
| Exploración de ideas | Cuando ni siquiera sabes bien qué quieres construir todavía |
| Código desechable o de bajo riesgo | Scripts puntuales, demos, herramientas internas sin impacto crítico |

El denominador común: **contextos donde el costo de un resultado incorrecto es bajo** y donde la velocidad de iteración importa más que la trazabilidad.

---

## Flujo de trabajo

El flujo de vibe coding es deliberadamente minimalista — tiene una sola fase real:

```
Idea / Intención  →  Implementación  →  Resultado
```

**Enfoque minimalista:** te enfocas en la intención y la idea; la implementación es la única fase intermedia. No hay una etapa explícita de especificar, planificar ni validar antes de que el agente escriba código — el prompt *es* la especificación, informal e implícita.

Esto es lo que hace a vibe coding tan rápido para arrancar: no hay ceremonia previa. También es la raíz de sus límites, que se explican a continuación.

---

## Límites

Cuando el mismo enfoque se usa para trabajo que sí importa a largo plazo, aparecen problemas estructurales:

- **No hay trazabilidad** — no sabes por qué el sistema terminó así; no queda registro de las decisiones que tomó el modelo.
- **Inconsistencia** — prompts con la misma intención generan resultados distintos, porque no hay un estándar que fije el comportamiento esperado.
- **Difícil mantenimiento** — se genera más código del necesario y no es fácil de entender, porque nadie (ni humano ni agente) documentó la intención original.
- **Riesgo en dominios críticos** — en ámbitos como banca o salud, este enfoque no cumple con requisitos de auditoría.
- **Dependencia del contexto inmediato** — si el chat o la sesión se pierde, se pierde también el conocimiento acumulado sobre por qué se construyó algo de una forma específica.

---

## Precauciones

Tres ideas clave para tener presentes al usar vibe coding, incluso en los escenarios donde sí es apropiado:

- **La IA no es un compilador, es un asistente.** No garantiza corrección; interpreta y genera, no verifica formalmente.
- **La IA no es determinística y puede cometer errores.** El mismo prompt, en momentos distintos, puede producir resultados distintos.
- **La IA genera texto, pero tú eres responsable del código.** La responsabilidad de lo que se despliega no se delega al modelo.

> "Vibe coding optimiza velocidad, pero rompe escalabilidad y gobernanza."

Esa tensión — velocidad ganada vs. gobernanza perdida — es exactamente el problema que **Spec-Driven Development** intenta resolver, y es el tema de la siguiente sección.

**Siguiente:** [Spec-Driven Development](../02-sdd/README.md)

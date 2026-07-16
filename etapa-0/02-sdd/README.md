# Spec-Driven Development (SDD)

Si [Vibe Coding](../01-vibe-coding/README.md) optimiza velocidad a costa de trazabilidad y gobernanza, **Spec-Driven Development (SDD)** es la respuesta a ese problema: un enfoque para desarrollar software asistido por IA que antepone una especificación explícita a la implementación.

---

## Definición

> **SDD:** "Desarrollar software a partir de especificaciones explícitas (specs), estructuradas y versionables que guían al LLM y a los agentes."

La idea central es simple de enunciar y exigente de practicar: en vez de improvisar un prompt cada vez, se escribe primero un artefacto — la *spec* — que describe el comportamiento esperado, y ese artefacto es lo que dirige al agente.

---

## Antecedentes

### Cómo lo define la industria

**Thoughtworks** lo describe así:

> Desarrollo dirigido por especificaciones (Spec-driven development) es un enfoque emergente para los flujos de trabajo de programación asistida por IA. Aunque la definición del término aún está evolucionando, por lo general se refiere a flujos de trabajo que comienzan con una especificación funcional estructurada y luego avanzan a través de múltiples pasos para descomponerla en piezas más pequeñas, soluciones y tareas. La especificación puede adoptar muchas formas: un único documento, un conjunto de documentos o artefactos estructurados que capturan distintos aspectos funcionales.

Otras definiciones clave de la industria:

| Fuente | Definición |
|---|---|
| **GitHub Spec Kit** | "Las especificaciones no obedecen al código — el código obedece a las especificaciones." |
| **Microsoft for Developers** | "Se usa en lugar de programar a ciegas (vibe coding) cada nueva funcionalidad y corrección de errores." |
| **Amazon Kiro** | "Artefactos estructurados que formalizan el proceso de desarrollo." |
| **EPAM Engineering blog** | "Definir lo que el software debe hacer... antes de escribir cualquier implementación." |

**En resumen:** la spec es la fuente de verdad; el código es su consecuencia, no el punto de partida.

### SDD no es nuevo: una idea que reaparece

"Especificar primero" no es una invención de 2024 — es una intuición que la industria ha reintentado cada década, con distinto tooling:

| Época | Movimiento | Idea central | Relación con SDD |
|---|---|---|---|
| 1970s | **Métodos formales** (Dijkstra, Hoare) | Derivar el software de un razonamiento formal | Intuición inicial |
| 1980s–90s | **Lenguajes de spec** (Z, VDM, Alloy) | Especificar formalmente antes de implementar | Muy complejos, poco adoptados |
| ~1999 | **TDD** (Kent Beck, XP) | El test como especificación ejecutable | Parentesco real de SDD |
| 2001 | **MDD / MDA** | De UML a código | Tooling rígido, poca flexibilidad |
| 2006 | **BDD** (Dan North) | Given/When/Then, especificar el comportamiento | Parentesco real de SDD |
| 2024+ | **SDD** (Spec Kit, OpenSpec) | La spec como contrato para agentes de IA | Los LLMs lo hacen viable |

**Conclusión:** no es una cadena de herencia directa — es la misma intuición reintentada. Lo que cambia es qué la hace viable esta vez: los LLMs.

### Qué es SDD (y qué no es)

**La evolución del punto de partida:**

- **Enfoque tradicional:** el código es lo primero; la spec (si existe) sirve al código — se escribe después, documentando lo que ya se construyó.
- **Enfoque SDD:** la spec es lo primero; el código sirve a la spec — se genera a partir de ella y se verifica contra ella.

**La spec dirige todo el trabajo:** de una misma spec se derivan la implementación, los tests, la documentación y la verificación — no son artefactos separados que hay que mantener sincronizados a mano, sino consecuencias de la misma fuente.

**Lo que NO es SDD:**

| No es... | Por qué |
|---|---|
| **Documentación muerta** | La spec vive con el código; cambios en la spec cambian el proyecto — no es un documento que se archiva y se olvida. |
| **Waterfall** | Waterfall describe el destino y el camino completo de antemano; SDD describe el destino, pero el camino (el cómo) puede cambiar. |
| **Lo opuesto a la velocidad de la IA** | Es lo opuesto al vibe coding, no a la IA: pone dirección, pero la velocidad que dio la IA se mantiene. |

---

## Características

- La spec describe **qué** debe hacer el sistema, **cómo** y bajo **qué reglas**.
- La spec no es un documento único, sino un **conjunto de especificaciones** que le dan contexto a la IA para la implementación.
- **El código es una consecuencia de la spec**, no el punto de partida.
- El LLM ejecuta instrucciones basadas en esa spec, **no en prompts improvisados**.

> **Spec:** define el comportamiento esperado antes de que empiece la implementación. Ese comportamiento está escrito en un artefacto que el agente puede leer, seguir, y contra el que puede verificar su trabajo.

---

## Beneficios

| Beneficio | Qué significa |
|---|---|
| **Determinismo relativo** | Menos variabilidad del LLM entre ejecuciones — la spec fija lo que no debe cambiar. |
| **Reproducibilidad** | Puedes regenerar el sistema (o partes de él) a partir de la misma spec. |
| **Auditabilidad** | Sabes qué regla generó qué comportamiento — trazabilidad real. |
| **Escalabilidad** | Múltiples desarrolladores o agentes pueden trabajar sobre la misma base sin perder consistencia. |

> "SDD pasa de prompts a contratos formales. El LLM deja de improvisar y empieza a ejecutar."

**Nota importante:** si la spec es ambigua, la IA tomará las decisiones importantes por ti. SDD no elimina la necesidad de pensar el problema — la vuelve explícita y anterior a la implementación.

---

## Composición del SPEC

### Qué contiene una spec

Una spec bien escrita tiene **6 elementos** y se recomienda que no supere las **~500 palabras**:

| Elemento | Responde a |
|---|---|
| **Quién** | La persona y el problema real |
| **Qué** | Acciones de usuario y sistema |
| **Cuándo** | El flujo — los pasos exactos de cada acción principal, no código |
| **Qué no** | Lo que queda fuera de alcance |
| **Debe ser verdad** | Criterios de aceptación verificables |
| **Asume** | Supuestos; qué no cambia |

**El corazón de la spec:** cada criterio en "debe ser verdad" tiene que ser verificable — si se puede volver un test, está bien escrito.

### Ejemplo de spec

> **"Transferencia inmediata entre cuentas propias"**
>
> - **Quién:** cliente con dos o más cuentas propias activas en la banca digital.
> - **Qué:** transfiere un monto entre sus cuentas, de forma inmediata.
> - **Cuándo:** elige origen y destino → ingresa monto → confirma → recibe comprobante.
> - **Qué no:** sin transferencias a terceros, interbancarias ni programadas (eso es otro ciclo).
> - **Debe ser verdad:** atómica (origen baja y destino sube el mismo monto); si el saldo es insuficiente, se rechaza y nada cambia; idempotente por id de operación.
> - **Asume:** las cuentas existen y están activas; el core expone débito/crédito.

### Qué NO tiene una spec

Estimaciones de tiempo, diagramas de secuencia, pseudocódigo, decisiones de arquitectura (salvo que exista una restricción real de negocio que las imponga). Esos artefactos pertenecen a otra capa — típicamente al "cómo" que se define en la fase de planificación, no en la spec.

### De dónde viene

La estructura hereda de tres tradiciones: **DDD** (lenguaje común, hablar el mismo idioma que el negocio), **BDD** (Given/When/Then) y **TDD** (contrato antes que código).

---

## Grilling (interrogatorio)

### Antes de escribir la spec: que el agente te pregunte a ti

El grilling invierte la interacción habitual: en vez de que tú le des instrucciones al agente, **el agente te interroga a ti** — te hace varias preguntas sobre comportamiento, casos límite y decisiones, antes de escribir una sola línea de spec.

| Paso | Qué ocurre |
|---|---|
| **1. Describes** | "Voy a construir X. Antes de la spec, hazme todas las preguntas que necesites — mínimo 10." |
| **2. El agente interroga** | Una pregunta a la vez, recorriendo el árbol de decisiones. Si algo ya está en el código, lo explora en vez de preguntarlo. |
| **3. Entendimiento compartido** | Tú y el agente quedan "en la misma onda" — este es el verdadero resultado, no un documento. |
| **4. Spec sin ambigüedad** | De esa conversación sale la spec. El agente la ejecuta sin desviarse. |

**¿De dónde viene?** Lo popularizó **Matt Pocock** (ecosistema TypeScript) con su skill `/grill-me` → `/grill-with-docs`. La raíz conceptual es más antigua: Fred Brooks, *"The Design of Design"* (el "design concept" compartido). Referencia: [github.com/mattpocock/skills](https://github.com/mattpocock/skills).

**Importante:** el grilling descubre los huecos *antes* de que el agente los rellene con suposiciones. El output del grilling no es la spec en sí — es el entendimiento compartido que hace posible escribirla bien.

### Ejemplo — transferencia entre cuentas

> **Tú:** "Voy a construir la transferencia inmediata. Interrógame antes de la spec."
>
> **El agente pregunta, una a la vez:**
> - ¿Si el saldo es insuficiente: se rechaza o se encola?
> - ¿La operación debe ser atómica (todo o nada)?
> - ¿Cómo evitamos duplicados al reintentar? ¿Idempotencia por id?
> - ¿Hay límite diario por cuenta o por cliente?
> - ¿Qué NO cubre: terceros, interbancarias, programadas?

### Dónde encaja en el ecosistema

El grilling no es una idea aislada — es la versión intensiva de un paso que ya existe en varias herramientas de SDD:

| Herramienta | Cómo lo llama |
|---|---|
| **Spec Kit** | `/speckit.clarify` — preguntas estructuradas que se guardan en "Clarifications" |
| **Kiro** | *Clarifying questions* — preguntas up-front sobre alcance, ambigüedad y bifurcaciones |
| **Pocock** | `/grill-me` — el mismo paso, llevado al extremo: 40–80 preguntas |
| **Superpowers** | *Brainstorming* — planteamiento de preguntas durante esta fase |

**Tiempo:** el interrogatorio cuesta ~45 minutos; ahorra días de correcciones. Es human-in-the-loop puro — no se delega a un agente autónomo.

---

## SDD vs Vibe Coding

### Mismo requisito, dos caminos

| | Vibe Coding | Spec-Driven Development |
|---|---|---|
| **Prompt/spec** | "Hazme una transferencia entre cuentas en la app del banco." | Spec "Transferencia inmediata entre cuentas propias" con quién, qué, flujo, límites y criterios verificables. |
| **Quién decide** | El agente decide todo: inventa el alcance (¿terceros? ¿programadas?), elige solo si valida saldo o duplicados. | El "qué" ya está definido: alcance explícito (solo cuentas propias), reglas claras (saldo, atomicidad, idempotencia). El agente solo decide el cómo. |
| **Resultado** | Distinto en cada intento; variable, sin forma de verificarla. | Predecible y verificable contra la spec. |

**Misma velocidad:** el agente implementa igual de rápido en ambos casos; la diferencia es que la spec le da la dirección correcta y produce un resultado verificable.

### La tabla que lo resume

| | Vibe Coding | Spec-Driven Development |
|---|---|---|
| **Punto de partida** | El agente decide | — |
| **Resultado** | Prompt de implementación | Spec de comportamiento |
| **Falla cuando** | Qué construir y cómo | Solo el cómo — el qué ya está definido |
| **Conocimiento del proyecto** | Variable; depende del prompt | Verificable contra la spec |
| **Cambio de decisión** | El proyecto crece en tu cabeza | Actualizas la spec; el agente reimplementa |
| **Al reimplementar** | Reimplementas desde cero | Los supuestos son incorrectos → se corrige la spec, no el código a mano |

**La clave:** en vibe coding el agente decide el qué y el cómo; en SDD el "qué" vive en la spec y el resultado es verificable contra ella.

---

## Flujo de trabajo

### Los 7 pasos

Primero el **qué**, luego el **cómo**, luego el **código**:

| # | Paso | Qué produce |
|---|---|---|
| 1 | **Marco base** | Reglas y estándares no negociables del proyecto |
| 2 | **Especificar** | El QUÉ: historias, reglas de negocio y criterios |
| 3 | **Planificar** | El CÓMO: arquitectura, stack y contratos |
| 4 | **Desglosar** | Tareas ejecutables y ordenadas |
| 5 | **Validar** | Revisión de consistencia antes de codificar |
| 6 | **Implementar** | El agente escribe el código desde la spec |
| 7 | **Verificar** | Los criterios, ya como tests, comprueban el código |
| ★ | **Resultado** | Feature que cumple la spec |

Estos 7 pasos se agrupan en tres bloques:

- **Preparación** (pasos 1–3): el QUÉ y el CÓMO, antes de codificar.
- **Puerta de calidad** (paso 5): valida los documentos antes de avanzar.
- **Ejecución y verificación** (pasos 6–7): codifica → prueba contra la spec → entrega. Si los tests fallan, el agente corrige y reintenta.

**La esencia:** el QUÉ y el CÓMO se definen y se validan *antes* de codificar; la implementación deriva de la spec, no al revés.

### El flujo en un IDE asistido por IA

En la práctica, dentro de un IDE como Cursor, el flujo se orquesta así:

```
Desarrollador → (prompts: intención puntual + contexto) → IDE
                                                              │
Specs (fuente de verdad) ──────── alimenta ────────────────→ │
                                                              ▼
                                                        Agente (LLM)
                                                              │
                                                          genera
                                                              ▼
                                                           Código
                                                              │
                                              se verifica contra la spec
```

**El IDE orquesta:** el agente lee las specs (fuente de verdad) y los prompts, genera código, y lo verifica contra la spec.

---

## Niveles de implementación

SDD no es binario — hay distintos grados de cuánta autoridad tiene la spec sobre el código, y a más madurez, menos deriva entre ambos:

| Nivel | Nombre | Qué implica | Fuente de verdad | Ejemplo (banca) |
|---|---|---|---|---|
| **1** | **Spec First** | La spec se escribe antes de codificar, para guiar la implementación inicial. Después puede o no mantenerse. Luego el código se edita a mano. | Código | Generas el primer código desde la spec; luego modificas el código y la spec queda vieja. |
| **2** | **Spec Anchored** | La spec se mantiene junto al código durante todo el ciclo de vida; cada cambio de comportamiento actualiza ambos, sincronizados. | Ambos | Cambia el límite diario: actualizas spec y código juntos; un check valida que coincidan. |
| **3** | **Spec as Source** | La spec es el único artefacto que editan los humanos; el código se genera y nunca se toca a mano. | Spec | Para cambiar la idempotencia editas SOLO la spec y regeneras; nadie toca el código. |

**Dónde apuntar:** a más madurez, menos deriva entre spec y código — pero "Spec as Source" exige disciplina y un buen harness (ver [Harness Engineering](../03-harness-engineering/README.md)).

---

## Antipatrones en SPECs

Cinco errores comunes al escribir specs, y por qué degradan el rendimiento del agente:

### 1) Spec kilométrica

- **Problema:** specs enormes llenas de contexto, diagramas, pseudocódigo e historia del proyecto.
- **Riesgo:** el agente pierde tiempo filtrando ruido y puede ignorar lo realmente importante.
- **Idea clave:** más texto ≠ más claridad.
- **Recomendación:** specs concisas (~500 palabras), información relevante y accionable, eliminar "grasa" documental.

### 2) Prescribir la implementación

- **Problema:** la spec dice *cómo* implementar en lugar de *qué* comportamiento lograr.
- **Riesgo:** se limita el criterio del agente y se fuerza una solución técnica específica.
- **Idea clave:** la spec define comportamiento, no arquitectura (eso va en otro lado).
- **Ejemplo:**
  - ❌ "Usa JWT + Redis para sesiones" (prescribe implementación)
  - ✅ "El token anterior debe invalidarse al iniciar una nueva sesión" (define comportamiento)

### 3) Out of Scope vacío

- **Problema:** no definir explícitamente qué NO está incluido.
- **Riesgo:** el agente añade funcionalidades "razonables" no solicitadas.
- **Idea clave:** out of scope no es opcional.
- **Ejemplo:** spec de login sin Out of Scope → el agente agrega 2FA, OAuth con terceros, recuperación de contraseña, etc. Con Out of Scope explícito, agrega solo lo requerido.

### 4) Assumptions ausentes

- **Problema:** supuestos importantes quedan implícitos.
- **Riesgo:** el agente construye una solución correcta... para un sistema equivocado.
- **Idea clave:** los supuestos invisibles generan errores invisibles.
- **Recomendación:** incluir restricciones, dependencias, supuestos técnicos y de negocio.

### 5) Acceptance Criteria vaga

- **Problema:** criterios subjetivos o imposibles de validar.
- **Riesgo:** lo esperado no es lo implementado.
- **Ejemplo:**
  - ❌ "El login debe funcionar sin errores" (subjetivo, no verificable)
  - ✅ "Al tercer intento fallido, la cuenta se bloquea 15 minutos" (observable y binario)
- **Idea clave:** si no se puede verificar, no se puede aceptar.
- **Recomendación:** los criterios deben ser **observables, medibles y binarios** (pass/fail).

---

## Temas varios

### Cuándo SDD ayuda y cuándo estorba

SDD es una herramienta, no una religión — hay que saber cuándo pagar su costo:

| SÍ ayuda (la spec paga su costo) | ESTORBA (la spec no se justifica) |
|---|---|
| Features nuevas y grandes — varios pasos, vale planear antes | Bugs de una línea — escribir la spec cuesta más que el fix |
| Requisitos complejos o críticos — banca: auditoría, normativa, dinero | Spikes exploratorios — aún no sabes el qué; explora primero |
| Trabajo en equipo — la spec alinea a varias personas | Prototipos desechables — no vivirán; la ceremonia no paga |
| Tareas repetibles — el patrón se reutiliza entre features | Cambios triviales y obvios — renombrar, ajustar un texto |
| Delegar a un agente — necesita un contrato claro del qué | Spec sobre-detallada — ata las manos y frena al agente |

**Criterio:** cuanto más grande, ambiguo o crítico el trabajo, más paga la spec; para lo pequeño y obvio, estorba. Regla simple: **¿lo haría otra persona o un agente sin preguntarte?** Entonces necesita spec.

### Greenfield vs Brownfield

| | Greenfield (proyecto nuevo) | Brownfield (código que ya existe) |
|---|---|---|
| **Contexto** | Terreno virgen: no hay código previo ni decisiones heredadas que condicionen. | Construir sobre lo existente: hay historia, integraciones y comportamiento que no se debe romper. |
| **Ventaja/riesgo** | Sin restricciones, empiezas desde cero. La spec define todo — arquitectura limpia desde el día 1. El agente no choca con código viejo. | Restricciones reales: stack, patrones y deuda que respetar. Falta contexto: el agente no conoce el código existente. Riesgo de romper algo al tocar otra cosa. |
| **Ajuste con SDD** | Encaja de forma natural — es su escenario ideal. | Funciona, pero primero hay que aportar contexto al agente. |

**La clave en brownfield: darle ojos al agente primero.**

1. Documenta lo que ya hay (reglas, ADR de lo existente).
2. Conecta el código real (MCP a la base de datos o repositorio).
3. Acota la spec a un módulo, no a todo el sistema.
4. Blinda con tests antes de cambiar.

**La realidad:** SDD brilla en greenfield; en brownfield sí funciona, pero primero hay que "darle ojos" al agente sobre el código que ya existe.

---

**Anterior:** [Vibe Coding](../01-vibe-coding/README.md) · **Siguiente:** [Harness Engineering](../03-harness-engineering/README.md)

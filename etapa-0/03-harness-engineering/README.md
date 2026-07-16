# Harness Engineering

[SDD](../02-sdd/README.md) resuelve el **qué**: le da al agente un contrato claro de comportamiento. Pero un agente con una buena spec todavía necesita un entorno que lo ejecute, lo verifique y lo corrija. Ese entorno es el **harness**, y diseñarlo bien es la disciplina que se conoce como **Harness Engineering**.

---

## Introducción

### De test harness a agent harness

**Arnés**, en su sentido original, es el equipo del caballo: riendas, silla — lo que rodea a un animal indómito para volverlo útil. El término migró a ingeniería de software hace 60 años y hoy vuelve a migrar, esta vez hacia los agentes de IA.

| Época | Concepto | Rodea a... |
|---|---|---|
| 1960s–70s | **Test harness** | Tu código |
| 2026 | **Agent harness** | El modelo |

**Test harness — rodea tu código:**
> Ejemplo: escribes `calcularInteres()`. El harness corre 100 pruebas solo — "98 pasan, 2 fallan". Tú no revisas a mano. Ejecuta y verifica tu código automáticamente.

**Agent harness — rodea al modelo:**
> Ejemplo: el agente escribe el código. El harness corre los tests, bloquea si fallan y le dice "corrige". El agente se auto-corrige. Ejecuta y verifica el trabajo del modelo automáticamente.

**¿Por qué ahora le queda al agente?** Antes lo impredecible era el código (podía tener bugs). Hoy lo impredecible es el modelo: no-determinista y sin tu contexto completo. El mismo arnés que ejecutaba y verificaba tu código ahora rodea, dirige y verifica al modelo. Misma idea, nuevo jinete.

**En simple:** el harness siempre rodea "lo indómito" para volverlo trabajo útil — antes el código, hoy el modelo.

### Qué es el Harness Engineering

**¿Qué es?** El harness es el andamiaje que gobierna cómo opera un agente: las herramientas que puede usar, las reglas que lo limitan, los sensores que verifican su trabajo, y los puntos donde interviene un humano.

La fórmula que popularizó el concepto:

```
Agente = Modelo + Harness
```

**Cómo y cuándo nace** — una línea de tiempo muy reciente:

| Cuándo | Qué pasó |
|---|---|
| Nov 2025 | Anthropic publica *"Effective Harnesses for Long-Running Agents"* |
| Feb 2026 | Mitchell Hashimoto (creador de Terraform) acuña la idea: "si el agente falla, cambia el sistema para que no vuelva a fallar" |
| Feb 2026 | Martin Fowler / B. Böckeler (Thoughtworks) lo formalizan con la taxonomía *guides & sensors*; OpenAI lo usa para 1M+ líneas sin código escrito a mano |

**En una frase:** es la disciplina de diseñar el entorno, las restricciones y los bucles de feedback que hacen confiable a un agente — todo lo que rodea al modelo.

---

## Capas: Prompt / Contexto / Arnés

### La evolución de la madurez en IA

El desarrollo asistido por IA ha pasado por tres fases, cada una con un enfoque y un resultado distinto:

| Fase | Cuándo | Enfoque | Enfoque técnico | Resultado |
|---|---|---|---|---|
| **1 — Ingeniería de Prompt** | 2022–2023 | Sintaxis y lenguaje | Cómo redactar la instrucción | Autocompletado y fragmentos de código |
| **2 — Ingeniería de Contexto** | 2024–2025 | Relevancia y memoria (RAG, MCP) | Qué información se le da al modelo | Lógica inyectada con contexto del proyecto |
| **3 — Ingeniería de Arnés** | 2026 | Autonomía, control y verificación | Qué entorno ejecuta y corrige al modelo | Ejecución y verificación de tareas de extremo a extremo |

**La tendencia:** cada ola no reemplaza a la anterior, la envuelve — el harness usa contexto, que a su vez usa buenos prompts. Hoy el foco está en el arnés.

### Las tres capas, en la práctica

```
┌─────────────────────────────────────────────┐
│  ARNÉS — gobierna el ciclo: ejecuta,         │
│  verifica, corrige                            │
│  ┌─────────────────────────────────────┐    │
│  │  CONTEXTO — arma lo que el modelo ve │    │
│  │  ┌─────────────────────────────┐    │    │
│  │  │  PROMPT — la instrucción:    │    │    │
│  │  │  cómo se lo pides al modelo  │    │    │
│  │  └─────────────────────────────┘    │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

Cada capa envuelve a la de adentro — más afuera = más autonomía.

**El mismo caso, en cada capa** (feature: transferencia entre cuentas propias):

| Capa | Qué agrega | Efecto |
|---|---|---|
| **Prompt** | "Implementa la transferencia siguiendo Clean Architecture, con tests y formato CQRS." | Mejora cómo lo pides |
| **+ Contexto** | Le das el ADR de idempotencia, las reglas del banco y el esquema real (vía MCP) | El modelo ya sabe QUÉ construir |
| **+ Arnés** | El agente escribe el código (ejecuta), un hook corre los tests (verifica) y, si el de idempotencia falla, reintenta hasta pasar (corrige) — sin tocar producción | Completa el ciclo de extremo a extremo |

**La relación:** cada capa contiene a la anterior — el arnés usa contexto, que usa un buen prompt. A más afuera, más autonomía y control.

---

## Resultados en la industria

### El estudio Meta-Harness (Stanford / MIT)

**El experimento:** los investigadores dejaron el mismo modelo fijo y solo cambiaron el harness (lo que lo rodea). El paper reporta que el mismo modelo puede rendir **hasta 6×** según el harness, y que un harness optimizado automáticamente superó a los diseñados a mano.

**La analogía: el mismo conductor, dos autos**

| Harness pobre | Harness bueno |
|---|---|
| Auto sin espejos, sin tablero, parabrisas empañado y sin GPS. El conductor es experto, pero choca: no ve dónde está ni a dónde va. | Mismo conductor, ahora con espejos, GPS, sensores y buena visibilidad. Llega sin problema. El conductor no mejoró: cambió lo que le deja percibir y corregir. |

> Fuente: Lee et al. (2026), *"Meta-Harness: End-to-End Optimization of Model Harnesses"*, Stanford/MIT — [arXiv:2603.28052](https://arxiv.org/abs/2603.28052) · proyecto: yoonholee.com/meta-harness

**La tesis:** el cuello de botella ya no es el modelo, sino el entorno que lo rodea — y ese entorno tú sí lo controlas.

### Cómo lograron el salto de 6×

Un modelo "desnudo" tiene tres carencias estructurales. El salto no es magia: el harness arregla las tres.

| # | Carencia | Sin harness | Con harness |
|---|---|---|---|
| **1** | **Percepción del entorno** (Contexto) | El modelo solo no "ve" tu proyecto: archivos, esquema de BD, lo que pasó antes. | El harness le inyecta esa info. Sin ella, el modelo adivina — y adivinar es la causa #1 de error. |
| **2** | **Bucle de verificación** (Sensores) | Por sí solo no comprueba su trabajo: escribe, asume que está bien y se detiene. | El harness lo obliga a verificar (correr tests) y corregir. De "intento a ciegas" a "intento → mido → corrijo". |
| **3** | **Límites y dirección** (Guardrails) | Sin restricciones se dispersa: tool equivocada, bucles, se sale del alcance. | El harness acota qué puede hacer y en qué orden, concentrando su inteligencia donde rinde. |

> Refs: Meta-Harness (Stanford/MIT) arXiv:2603.28052 · Natural-Language Agent Harnesses (Tsinghua/HIT) arXiv:2603.25723 — síntesis: las carencias resumen hallazgos comunes de ambos.

**La suma:** percepción + autocorrección + rumbo convierten al mismo modelo de "tropezar a ciegas" a "trabajar con control".

### Resultados reales del harness

Cuatro empresas, cuatro métricas distintas — mismo patrón:

| Empresa | Métrica | Antes | Con arnés | Detalle |
|---|---|---|---|---|
| **LangChain** | % tareas resueltas (Terminal Bench 2.0) | 52.8% | 66.5% | deepagents-cli · Top 30 → Top 5 · mismo modelo |
| **Vercel v0** | % éxito en consultas (text-to-SQL) | 80% | 100% | De 17 herramientas a 2 · muestra pequeña |
| **Microsoft** | "Intent Met" — acierta causa raíz | 45% | 75% | Azure SRE Agent · workspace tipo repo |
| **SWE-bench Pro** | % resuelto (mismo modelo Opus) | 23% | 45% | Scaffold básico → optimizado · Scale AI |

**El patrón común:** cada empresa mide algo distinto — tasa de éxito, precisión, tokens — pero en los cuatro casos la mejora vino del arnés, no de cambiar el modelo. El modelo es el techo; el arnés, la escalera.

---

## Temas relevantes en la práctica

### Los 3 pilares del harness

| Pilar 1 — Repositorio / Memoria | Pilar 2 — Distribución de roles | Pilar 3 — Verificación / El bucle |
|---|---|---|
| *el conocimiento permanente* | *quién hace qué, acotado* | *comprobar y auto-corregir* |
| **Guía base** — `AGENTS.md` / `CLAUDE.md` | **Subagentes** — planifican, escriben, revisan | **Hooks** — disparados por evento |
| **Reglas** — arquitectura, stack, estándares | **Skills** — instructivos por tarea | **Tests & CI** — sensores: verifican vs. la spec |
| **ADR** — decisiones y su porqué | **MCP** — herramientas y datos vivos | **Permisos** — guardrails: allow/deny |
| **Memory** — persistencia entre sesiones | **Commands** — workflows reutilizables | **Observabilidad** — trazas de lo que hizo |
| **Spec** — el contrato: el QUÉ | | |
| **Estado** — `feature_list` · `progress` · `checkpoints` | | |

**De lo general al detalle:** los 3 pilares agrupan por propósito; spec y estado son "convención del proyecto" — idénticos en cualquier IDE, a diferencia de la configuración (que cambia de sintaxis según la herramienta).

### Comparación de harness entre Cursor y Claude Code

Un mismo proyecto (Quarkus, transferencias bancarias) implementado con el mismo harness conceptual en dos IDEs distintos:

| | **Claude Code** (agente de terminal) | **Cursor** (IDE de edición) |
|---|---|---|
| Índice del proyecto | `CLAUDE.md` — qué stack + comandos | `AGENTS.md` — qué stack + comandos |
| Reglas | `.claude/rules/arquitectura.md`, `stack.md`, `estandares-banco.md`, `tests.md` | `.cursor/rules/*.mdc` (arquitectura, stack, estándares, tests con scope de globs) |
| Workflows | `commands/` — ej. `/revisar` | `commands/` — ej. `/revisar` |
| Hooks + permisos | `settings.json` (allow/deny) | `hooks/` + allowlist |
| Subagentes / skills | `agents/` · `skills/` | `agents/` · `skills/` |
| Datos vivos / memoria | `.mcp.json` · `memory` | `mcp.json` · `memories` |
| Contrato (spec) | `specs/transferencia.md` | `specs/transferencia.md` |
| Estado del proyecto | `estado/` · `init.sh` — `feature_list`, `progress`, `checkpoints` | `estado/` · `init.sh` — idéntico |

**Dos tipos de archivos, ambos parte del harness:**
- **Config** (guía, reglas, hooks, permisos, subagentes, skills, MCP) — cambia de sintaxis según el IDE.
- **Estado del proyecto** (spec, feature_list, progress, checkpoints) — es convención de proyecto, idéntico en ambos.

**Mismo modelo, misma spec:** solo cambia cómo cada IDE envuelve al agente; la spec en `/specs` es idéntica e interoperable entre ambas herramientas.

### ¿Cómo empezar un harness nuevo?

El harness se construye de forma incremental, no todo de una vez:

| Nivel | Nombre | Qué agrega | Contenido |
|---|---|---|---|
| **0** | **Arranque** | Guía base + control de versiones | `CLAUDE.md` / `AGENTS.md` · git |
| **1** | **Memoria** | Reglas, ADR y estado | `rules/` · ADR · progress |
| **2** | **Verificación** | Tests + hooks que comprueban | tests · hooks · CI |
| **3** | **Orquestación** | Subagentes, skills, MCP, permisos | subagentes · MCP · permisos |

**La regla de oro:** no añadas una pieza "por si acaso". Cuando el agente falle: error → diagnóstico → añade la pieza que lo evita. El harness crece por necesidad, no por moda.

**El error común:** querer el harness completo desde el día 1. Empieza con una guía y unos tests; añade piezas solo cuando un problema real lo pida.

---

**Anterior:** [Spec-Driven Development](../02-sdd/README.md) · **Volver al índice:** [Etapa 0](../README.md)

# Laboratorio 2: Prompts y skills

## Objetivo

Aprender a definir, versionar y evaluar **skills** (comandos reutilizables con instrucciones persistentes) en Claude Code. El laboratorio está dividido en dos partes secuenciales: primero los fundamentos trabajando con una skill ya creada, y luego la creación y evaluación de skills propias con el plugin oficial `skill-creator`.

**Prerrequisitos generales:**

- [Laboratorio 1: Agentes y subagentes](../agents/README.md) — orquestación y delegación en Cursor.
- Opcional: [Laboratorio extra: Agent Loop](../agent-loop/README.md) — marco teórico del bucle agente–herramientas.
- Claude Code CLI instalado y autenticado.

---

## Partes del laboratorio

### [Parte 1 — Fundamentos de skills](./fundamentos/README.md)

Diferencia entre **prompt** y **skill**, anatomía de una skill (frontmatter YAML + cuerpo Markdown), scopes proyecto vs. global, y trabajo con la skill ya creada `/daily-summary`.

| | |
|---|---|
| **Enfoque** | Conceptual y de uso: entender y consumir skills existentes |
| **Material** | [`fundamentos/.claude/skills/daily-summary/SKILL.md`](./fundamentos/.claude/skills/daily-summary/SKILL.md) |
| **Workspace** | `etapa-1/laboratorios/skills/fundamentos` |

### [Parte 2 — Creación de skills](./creacion/README.md)

Creación de skills desde cero (manual y asistida) y ciclo de calidad **Create → Eval → Improve → Benchmark** con el plugin oficial `skill-creator`.

| | |
|---|---|
| **Enfoque** | Práctico y de autoría: crear, evaluar y mejorar skills propias |
| **Material** | [`creacion/.claude/settings.local.json`](./creacion/.claude/settings.local.json) (plugin `skill-creator` habilitado) |
| **Workspace** | `etapa-1/laboratorios/skills/creacion` |

> Las partes son secuenciales: completa **Fundamentos** antes de pasar a **Creación**, ya que la segunda parte asume que conoces la anatomía de una skill y el comportamiento de `/daily-summary`.

---

## Estructura de archivos

```
skills/
├── README.md                           # Este archivo (índice)
├── fundamentos/                        # Parte 1 — Fundamentos de skills
│   ├── README.md
│   └── .claude/
│       └── skills/
│           └── daily-summary/
│               └── SKILL.md            # Skill de ejemplo del laboratorio
└── creacion/                           # Parte 2 — Creación de skills
    ├── README.md
    └── .claude/
        └── settings.local.json         # Plugin skill-creator habilitado
```

---

## Siguiente laboratorio

Tras completar ambas partes, continúa con [Laboratorio 3: Ventana de contexto y atención](../context/README.md) para entender cómo el tamaño y la selección de contexto afectan el comportamiento del agente cuando usas skills, reglas y recuperación de código.

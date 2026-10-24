# Laboratorio 7: Automatización de pruebas

Este laboratorio recorre con [SDD Devkit](https://github.com/juanca202/sdd-devkit) el camino de una historia de usuario ya cerrada a sus pruebas automatizadas: casos de prueba documentados, automatización 1:1 y una matriz de cobertura de los criterios de aceptación.

El insumo es [user-story-sample.md](./assets/user-story-sample.md), la historia US-001 *Acceso demo de la aplicación*: un modo demo de solo lectura, alimentado por archivos JSON en `public/data/demos`, que intercepta las mutaciones y deriva al flujo de autenticación. La historia está en Ready y trae once criterios (AC-001 a AC-011) con reglas de negocio enlazadas (BR-01 a BR-09).

## Objetivo

Dejar cada criterio de US-001 con un caso de prueba documentado, automatizado y con resultado en un reporte de cobertura.

1. Derivar los casos de prueba de los criterios de aceptación.
2. Automatizar esos casos en una rama `test/`, sin inventar casos nuevos.
3. Ejecutar la compuerta de calidad y verificar la cobertura de AC-001 a AC-011.

## Pre-requisitos

- Cursor, Node.js 22+ y Git.
- SDD Devkit instalado (ver [laboratorio 6](./lab-006-helpdesk.md#pre-requisitos)).
- Un repositorio con harness inicializado (`/arch-init`) y el estándar de testing definido.
- La historia: [user-story-sample.md](./assets/user-story-sample.md).

## Definition of Done

- Cada criterio de US-001 tiene al menos un caso de prueba documentado.
- Cada caso tiene una prueba automatizada que se ejecuta en la suite del proyecto.
- `/quality-check` termina en verde.
- `criteria-coverage.md` muestra AC-001 a AC-011 en `COVERED` o con la brecha escrita.

## Paso 1. Lectura de la historia (10 min)

Lean la historia en grupo antes de llamar a un skill. Identifiquen qué criterios son de interfaz (AC-001, AC-004, AC-005, AC-008, AC-009), cuáles de datos (AC-002, AC-010) y cuáles de comportamiento transversal (AC-003, AC-007, AC-011). Esa clasificación orienta el nivel de prueba: unitaria, integración o e2e.

## Paso 2. Ubicar la historia (5 min)

Copia [user-story-sample.md](./assets/user-story-sample.md) en la carpeta de cambios del proyecto como `US-001-acceso-demo/README.md` (o la ruta que indique `.sdd-devkit/settings.json`).

## Paso 3. Casos de prueba (20 min)

`/test-define` deriva los casos de los criterios según IEEE 29119-4: camino feliz, error y límite.

### Llamado

```text
/test-define US-001
```

### Antes de seguir

- Existe `test-cases/` con los casos generados.
- Cada AC de la historia enlaza sus casos de prueba.
- Cada caso declara precondiciones, pasos, datos y resultado esperado verificable.

## Paso 4. Automatización (40 min)

`/work-implement` traduce cada caso documentado a código, 1:1, en una rama `test/`.

### Llamado

```text
/work-implement casos de prueba de US-001
```

### Qué cierran ustedes

- Nivel de cada prueba (unitaria, integración, e2e) según el estándar de testing.
- Cómo se aíslan los datos de `public/data/demos` y cómo se verifica que no salen mutaciones al backend (AC-007).

### Antes de seguir

- Cada prueba referencia su caso de prueba.
- No hay pruebas sin caso documentado ni casos sin prueba.

## Paso 5. Calidad y cobertura (20 min)

### Llamado

```text
/quality-check
/coverage-verify US-001
```

### Antes de seguir

- El veredicto de `/quality-check` es verde.
- `criteria-coverage.md` lista AC-001 a AC-011 con su caso de prueba, su estado y su resultado.

## Paso 6. Integración (10 min)

`/work-integrate` repite las puertas de cierre y hace merge de la rama `test/` hacia su rama de origen.

```text
/work-integrate
```

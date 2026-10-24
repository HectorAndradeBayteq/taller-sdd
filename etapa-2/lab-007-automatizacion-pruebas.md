# Laboratorio 7: Automatización de pruebas

Este laboratorio recorre con [SDD Devkit](https://github.com/juanca202/sdd-devkit) el camino de una historia de usuario ya cerrada a sus pruebas automatizadas: casos de prueba documentados, automatización 1:1 y una matriz de cobertura de los criterios de aceptación.

El insumo es la historia 34266 de Azure DevOps, que se sincroniza al proyecto. Su contenido de referencia está en [user-story-sample.md](./assets/user-story-sample.md): la historia US-001 *Acceso demo de la aplicación*, un modo demo de solo lectura, alimentado por archivos JSON en `public/data/demos`, que intercepta las mutaciones y deriva al flujo de autenticación. La historia está en Ready y trae once criterios (AC-001 a AC-011) con reglas de negocio enlazadas (BR-01 a BR-09).

## Objetivo

Dejar cada criterio de US-001 con un caso de prueba documentado, automatizado y con resultado en un reporte de cobertura.

1. Crear el proyecto de pruebas desde el proyecto base, enlazado al sistema externo en Azure DevOps.
2. Sincronizar la historia a automatizar desde Azure DevOps.
3. Derivar los casos de prueba de los criterios de aceptación.
4. Automatizar esos casos en una rama `test/`, sin inventar casos nuevos.
5. Ejecutar la compuerta de calidad y verificar la cobertura de AC-001 a AC-011.

## Pre-requisitos

- Cursor, Node.js 22+ y Git.
- SDD Devkit instalado (ver [laboratorio 6](./lab-006-helpdesk.md#pre-requisitos)).
- Acceso al proyecto de Azure DevOps [Bayteq IA](https://dev.azure.com/BayteqDev/Bayteq%20IA) y al proyecto base [test-base](https://github.com/juanca202/test-base.git).
- Permiso de lectura sobre la historia 34266 en Azure DevOps.

## Definition of Done

- Cada criterio de US-001 tiene al menos un caso de prueba documentado.
- Cada caso tiene una prueba automatizada que se ejecuta en la suite del proyecto.
- `/quality-check` termina en verde.
- `criteria-coverage.md` muestra AC-001 a AC-011 en `COVERED` o con la brecha escrita.

## Paso 1. Creación del proyecto (15 min)

`/arch-init` crea el proyecto de pruebas a partir del proyecto base e inicializa su harness, con el sistema bajo prueba alojado en Azure DevOps.

### Llamado

```text
/arch-init proyecto de pruebas para un sistema externo azure devops: https://dev.azure.com/BayteqDev/Bayteq%20IA, proyecto base https://github.com/juanca202/test-base.git
```

### Antes de seguir

- El repositorio tiene `AGENTS.md`, `.agents/MEMORY.md` y `.sdd-devkit/settings.json`.
- El stack de pruebas quedó declarado y la compuerta de calidad corre sobre el proyecto base.

## Paso 2. Obtener la historia (10 min)

`/work-define` con el modificador `sync` trae la historia desde Azure DevOps y crea la US local en la carpeta de cambios del proyecto.

### Llamado

```text
/work-define sync 34266
```

### Antes de seguir

- La historia existe en la carpeta de cambios, con sus criterios de aceptación y reglas de negocio.
- El contenido coincide con el del tracker. [user-story-sample.md](./assets/user-story-sample.md) sirve de referencia.

## Paso 3. Lectura de la historia (10 min)

Lean la historia en grupo antes de llamar a un skill. Identifiquen qué criterios son de interfaz (AC-001, AC-004, AC-005, AC-008, AC-009), cuáles de datos (AC-002, AC-010) y cuáles de comportamiento transversal (AC-003, AC-007, AC-011). Esa clasificación orienta el nivel de prueba: unitaria, integración o e2e.

## Paso 4. Casos de prueba (20 min)

`/test-define` deriva los casos de los criterios según IEEE 29119-4: camino feliz, error y límite.

### Llamado

```text
/test-define US-001
```

### Antes de seguir

- Existe `test-cases/` con los casos generados.
- Cada AC de la historia enlaza sus casos de prueba.
- Cada caso declara precondiciones, pasos, datos y resultado esperado verificable.

## Paso 5. Automatización (40 min)

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

## Paso 6. Calidad y cobertura (20 min)

### Llamado

```text
/quality-check
/coverage-verify US-001
```

### Antes de seguir

- El veredicto de `/quality-check` es verde.
- `criteria-coverage.md` lista AC-001 a AC-011 con su caso de prueba, su estado y su resultado.

## Paso 7. Integración (10 min)

`/work-integrate` repite las puertas de cierre y hace merge de la rama `test/` hacia su rama de origen.

```text
/work-integrate
```

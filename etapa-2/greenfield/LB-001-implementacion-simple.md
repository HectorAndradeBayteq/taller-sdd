# Ejercicio 1: Implementación simple desde una historia con una tarea

## Objetivo

Observar la documentación creada (historia de usuario y tarea técnica), ejecutar la implementación de la tarea y asegurar que el resultado final sea el esperado.

Este ejercicio introduce el flujo de implementación con el grado mínimo de complejidad: una **historia de usuario ya definida** con **una única tarea técnica** en estado **Ready**, lista para desarrollar de punta a punta.

## Documentación de referencia

| Artefacto | Ubicación |
|-----------|-----------|
| Historia de usuario | `todo-app/docs/specs/user-stories/US-001-gestion-tareas/README.md` |
| Tarea técnica | `todo-app/docs/specs/user-stories/US-001-gestion-tareas/TK-001-implementar-app-todos.md` |
| Progreso | `todo-app/docs/specs/user-stories/US-001-gestion-tareas/progress.md` |
| Harness de agentes | `todo-app/AGENTS.md` |

## Ejecución del flujo

### Paso 1 — Revisar la documentación

1. Lee la historia de usuario (`README.md`) y verifica que los criterios de aceptación (`BR-XX`, `SC-XX`) cubren el requerimiento del Ejercicio 0.
2. Lee la tarea técnica (`TK-001`) y confirma que el plan de implementación, dependencias y referencias son claros.
3. Verifica que la tarea esté en estado **Ready**.

### Paso 2 — Implementación

Usa el skill **`/story-implement`** indicando la historia `US-001-gestion-tareas` (o la tarea `TK-001`).

Antes de continuar, asegúrate de que:
- El repositorio tenga un working tree limpio.
- Estés en la rama `feature/US-001-gestion-tareas`.

### Paso 3 — Validación

Comprueba manualmente que la aplicación cumple:

- CRUD completo de tareas (crear, listar, editar, eliminar).
- Título obligatorio al crear o editar.
- Prioridad restringida a alta, media o baja.
- Tareas completadas distinguibles visualmente de las pendientes.
- Listado ordenado por prioridad (alta → media → baja) de forma predeterminada.

Para ejecutar la app:

```bash
cd todo-app
npm install
npm run dev
```

# Diseño de referencia — TaskCard (Plan B sin acceso a Figma)

> **Material didáctico.** Este documento **no** proviene de un archivo real de Figma ni reproduce el formato exacto de la salida del MCP: es una especificación textual equivalente a lo que el instructor obtiene con `get_variable_defs` + `get_design_context` + `get_screenshot`. Úsalo solo si no puedes conectarte a Figma (límite de llamadas, sin cuenta o sin acceso al archivo).

## Variables (tokens)

| Variable Figma | Valor | Token CSS a actualizar |
|----------------|-------|------------------------|
| `color/primary` | `#4F46E5` | `--color-primary` |
| `color/surface` | `#FFFFFF` | `--color-surface` |
| `color/background` | `#F8FAFC` | `--color-background` |
| `color/text` | `#0F172A` | `--color-text` |
| `color/muted` | `#64748B` | `--color-muted` |
| `color/border` | `#E2E8F0` | `--color-border` |
| `color/priority/high` | `#E11D48` | `--color-priority-high` |
| `radius/md` | `12` | `--radius-md` (px) |
| `space/1` | `4` | `--space-1` (px) |
| `space/3` | `12` | `--space-3` (px) |
| `space/4` | `16` | `--space-4` (px) |
| `size/checkbox` | `20` | `--size-checkbox` (px, token nuevo) |

## Frame `TaskCard`

- Contenedor: auto layout **horizontal**, padding `space/4`, separación `space/3`, fondo `color/surface`, borde 1 px `color/border`, radio `radius/md`.
- Zona izquierda: checkbox de `size/checkbox` × `size/checkbox`.
- Zona central (ocupa el espacio restante, auto layout **vertical**, separación `space/1`):
  - Título: `--font-size-md` (16 px) / semibold, color `color/text`.
  - Línea de meta: `--font-size-sm` (14 px) / regular, color `color/muted`, formato `Prioridad · duración · fecha`. La prioridad usa el color `color/priority/*`.
- Zona derecha: botón de texto "Eliminar", color `color/priority/high`.
- Estado **completada**: título tachado y color `color/muted`.
- Entre tarjetas: separación vertical `space/3` (las tarjetas ya no comparten borde inferior como filas de lista).

## Criterios de aceptación del ejercicio

1. Solo se modifican `app-demo/styles/tokens.css`, `app-demo/styles/app.css` y `app-demo/src/components/task-item.js`.
2. No aparecen colores ni tamaños literales fuera de `tokens.css` (todo vía `var(--token)`). Únicas excepciones: `0` y el ancho de borde de `1px`. Si falta un token, se añade a `tokens.css`; no se escribe el valor en `app.css`.
3. Los roles/nombres accesibles del checkbox y del botón no cambian (los specs de Playwright dependen de ellos).

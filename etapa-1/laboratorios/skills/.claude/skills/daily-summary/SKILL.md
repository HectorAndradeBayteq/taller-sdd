---
name: daily-summary
description: Genera un resumen de trabajo del día basado en los commits de git del día actual
---
# Daily Summary

Genera un resumen claro y conciso del trabajo realizado hoy.

## Instrucciones

1. Ejecuta `git log --since="midnight" --oneline --author="$(git config user.name)"` para obtener los commits de hoy.
2. Si no hay commits, indícalo y pregunta si quiero resumir otra cosa.
3. Agrupa los commits por tema o módulo cuando sea posible.
4. Presenta el resumen en este formato:

## Resumen del día — {fecha}

**Lo que hice hoy:**
- [ítem agrupado 1]
- [ítem agrupado 2]

**Próximos pasos sugeridos:**
- [basado en el contexto de los commits]

Usa lenguaje directo, sin florituras. El resumen debe caber en 10 líneas máximo.
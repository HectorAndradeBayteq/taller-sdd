---
name: daily-summary
description: Genera un resumen de trabajo del día basado en los commits de git del día actual. Úsala cuando el usuario pida un resumen del día, reporte de avance, "qué hice hoy", "daily standup", "resumen de commits", o similares.
---
# Daily Summary

Genera un resumen detallado y claro del trabajo realizado hoy.

## Instrucciones

1. Obtén los commits del día:
   ```
   git log --since="midnight" --stat --author="$(git config user.name)"
   ```

2. Si no hay commits, indícalo y pregunta si quieres resumir otra cosa.

3. Para cada commit, considera:
   - El mensaje del commit (qué se intentó lograr)
   - Los archivos modificados y su ruta (qué módulo o área del proyecto)
   - El volumen de cambios (líneas añadidas/eliminadas)

4. Infiere el tipo de trabajo de cada commit según contexto:
   - `feat` / nueva funcionalidad
   - `fix` / corrección de bug
   - `refactor` / limpieza o reestructuración
   - `docs` / documentación
   - `config` / configuración o infraestructura

5. Presenta el resumen en este formato:

---

## Resumen del día — {fecha}

**Lo que hice hoy:**
- [tipo] **[área/módulo]**: descripción concisa de qué cambió y por qué importa
- [tipo] **[área/módulo]**: ...

**Archivos más modificados:**
- `ruta/al/archivo.ext` — [qué se hizo ahí]

**Próximos pasos sugeridos:**
- [inferido del contexto de los commits y archivos tocados]

---

Usa lenguaje directo. El resumen completo no debe superar 20 líneas. Si hay muchos commits, agrúpalos por módulo o tema en lugar de listarlos uno a uno.

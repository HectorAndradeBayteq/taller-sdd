# Generador de fichas de catálogo — instrucciones del proyecto

Este laboratorio **no usa skills**. Solo agentes en `.cursor/agents/` y las políticas de este archivo.

Responde en **español**. Respeta **mínimo privilegio** en todo momento.

---

## Catálogo de productos — activación

Cuando el usuario pida una **ficha de catálogo**, **ficha de producto**, **generar catálogo**, o describa un producto para documentar con imagen y opiniones:

1. Lee y sigue **al pie de la letra** `.cursor/agents/documentador-ficha-catalogo.md`
2. No uses skills de este ni de otros proyectos
3. Respeta las secciones **Agent Permissions**, **Logging Standards** y **Output Standards** de este archivo

El agente principal actúa como `documentador-ficha-catalogo` para ese turno.

---

## Agent Permissions

Principio de **mínimo privilegio**. Solo `documentador-ficha-catalogo` lanza los tres subagentes en paralelo y el auditor al final. Solo `buscador-opiniones` puede lanzar un subagente hijo de fase 1.

### Matriz de permisos

| Agente | Modo | Read | Write | Shell | WebSearch | GenerateImage | Task (subagentes) |
|--------|------|------|-------|-------|-----------|---------------|-------------------|
| documentador-ficha-catalogo | write | ✅ | ✅ `output/` | ✅ solo hora | ❌ | ❌ | ✅ (3 paralelo + auditor) |
| investigador-caracteristicas | readonly | ✅ | ✅ solo `log/` | ✅ solo hora | ✅ | ❌ | ❌ |
| generador-imagenes | write | ✅ | ✅ `output/<slug>/` | ✅ solo hora | ❌ | ✅ | ❌ |
| buscador-opiniones | readonly | ✅ | ✅ solo `log/` | ✅ solo hora | ✅ | ❌ | ✅ (1 hijo) |
| analizador-sentimiento | readonly | ✅ | ✅ solo `log/` | ✅ solo hora | ❌ | ❌ | ❌ |
| auditor | readonly | ✅ | ✅ solo `log/` | ✅ solo hora | ❌ | ❌ | ❌ |

### Shell (solo hora)

Todos los agentes y subagentes pueden usar **Shell únicamente** para obtener la fecha/hora local del sistema y registrar timestamps en sus logs (comandos en **Logging Standards**).

- **Prohibido**: cualquier otro comando Shell (listar archivos, instalar paquetes, scripts, etc.).
- **Obligatorio**: consultar la hora con Shell antes de escribir **Inicio**, cada fila de **Actividades** y **Fin** en el log.

### Reglas de invocación

- Profundidad máxima: 2 (documentador-ficha-catalogo → buscador → analizador-sentimiento)
- Los subagentes de fase 1 **no** lanzan Task excepto `buscador-opiniones`
- Ningún agente modifica archivos en `.cursor/`
- Consolidación final (`README.md`) solo la hace `documentador-ficha-catalogo`

### Escritura permitida por agente

| Agente | Archivos |
|--------|----------|
| documentador-ficha-catalogo | `output/<slug>/README.md`, `output/<slug>/log/documentador-ficha-catalogo.md` |
| investigador-caracteristicas | `output/<slug>/log/investigador-caracteristicas.md`, opcional `caracteristicas.json` |
| generador-imagenes | `output/<slug>/imagen-producto.png`, `output/<slug>/log/generador-imagenes.md` |
| buscador-opiniones | `output/<slug>/log/buscador-opiniones.md` |
| analizador-sentimiento | `output/<slug>/log/analizador-sentimiento.md`, opcional `opiniones.json` |
| auditor | `output/<slug>/log/auditor.md`, `output/<slug>/log/informe.md` |

---

## Logging Standards

Cada instancia que atienda el caso (documentador, subagente o subagente anidado) **debe** crear su propio archivo de log antes de trabajar y actualizarlo al terminar.

### Ubicación

```
output/<slug-producto>/log/<nombre-agente>.md
```

- `<slug-producto>`: nombre del producto en minúsculas, sin espacios (guiones), sin caracteres especiales. Ej: `iphone-15-pro`, `cafetera-nespresso`.
- `<nombre-agente>`: valor del campo `name` en el frontmatter del agente (ej: `investigador-caracteristicas`).

### Plantilla obligatoria

```markdown
# Log: {nombre-agente}

## Inicio
- **Fecha/hora**: {ISO 8601 local, ej. 2026-05-18T14:32:01}
- **Producto**: {nombre legible del producto}
- **Slug**: {slug-producto}

## Input
{prompt o datos recibidos del agente padre — texto literal o resumen fiel}

## Actividades
| Hora | Acción |
|------|--------|
| {HH:MM:SS} | {descripción breve: herramienta usada, decisión, etc.} |

## Output
{resultado entregado al padre o al usuario — JSON, rutas de archivos, resumen}

## Fin
- **Fecha/hora**: {ISO 8601}
- **Estado**: completado | error
- **Notas**: {opcional}
```

### Obtener fecha/hora (Shell obligatorio)

Antes de escribir **Inicio**, cada fila de **Actividades** y **Fin**, ejecuta **un único comando Shell** según el SO (ver **Agent Permissions**: Shell solo para esto):

| SO | Comando |
|----|---------|
| Windows | `powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-ddTHH:mm:ss'"` |
| Unix / macOS / Linux | `date +"%Y-%m-%dT%H:%M:%S"` |

Usa la salida (sin espacios extra) así:

- **Inicio** y **Fin** → `**Fecha/hora**`: valor completo ISO local (ej. `2026-05-18T14:32:01`)
- **Actividades** → columna **Hora**: solo `HH:MM:SS` (últimos 8 caracteres del timestamp)

No inventes ni estimes la hora. Si el comando falla, repítelo una vez; si vuelve a fallar, anótalo en **Notas** de **Fin** y usa la hora del intento más reciente.

### Reglas

1. Consultar la hora con Shell y escribir la sección **Inicio** como primera acción al recibir el caso.
2. Registrar cada herramienta relevante en **Actividades** con timestamp obtenido por Shell.
3. Consultar la hora con Shell y completar **Output** y **Fin** antes de retornar al agente padre.
4. No compartir archivo de log entre agentes: un archivo por instancia/nombre.

---

## Output Standards — Ficha de catálogo

### Ubicación

```
output/<slug-producto>/
├── README.md           # Ficha consolidada (documentador-ficha-catalogo)
├── imagen-producto.png # Asset de imagen
├── caracteristicas.json # Opcional: datos estructurados
├── opiniones.json      # Opcional: datos estructurados
└── log/
    ├── *.md            # Un log por agente
    └── informe.md      # Informe de trazabilidad (auditor)
```

### Estructura del README.md

```markdown
# Ficha de catálogo: {Nombre del producto}

> Generado el {fecha} — demo de agentes en paralelo

## Descripción y características

{Texto narrativo + lista de especificaciones clave}

## Imagen

![{Nombre del producto}](./imagen-producto.png)

## Opiniones de usuarios

### Resumen
{Párrafo sintético del analizador de sentimiento}

### Opiniones destacadas
- **{fuente}** ({valoración}): "{cita breve}"
- ...

## Metadatos
| Campo | Valor |
|-------|-------|
| Producto | {nombre} |
| Slug | {slug} |
| Agentes | investigador-caracteristicas, generador-imagenes, buscador-opiniones, analizador-sentimiento |
```

### Estilo

- Idioma: español
- Markdown válido; imagen con path relativo `./imagen-producto.png`
- Tono informativo de catálogo e-commerce, sin marketing exagerado

# Generador de fichas de catálogo — instrucciones del proyecto

Este laboratorio **no usa skills**. Solo agentes en `.kiro/agents/` (configuración JSON + instrucciones en `.kiro/agents/prompts/`) y las políticas de este archivo.

Responde en **español**. Respeta **mínimo privilegio** en todo momento.

---

## Catálogo de productos — activación

Cuando el usuario pida una **ficha de catálogo**, **ficha de producto**, **generar catálogo**, o describa un producto para documentar con imagen y opiniones:

1. Si no estás corriendo como el agente `documentador-ficha-catalogo`, pide al usuario que reinicie con `kiro-cli chat --agent documentador-ficha-catalogo` (o `/agent swap documentador-ficha-catalogo`)
2. No uses skills de este ni de otros proyectos
3. Respeta las secciones **Agent Permissions**, **Logging Standards** y **Output Standards** de este archivo

---

## Agent Permissions

Principio de **mínimo privilegio**. Solo `documentador-ficha-catalogo` tiene la herramienta `subagent`: lanza los tres subagentes de fase 1 en paralelo, el analizador de fase 2 y el auditor al final.

En Kiro CLI **un subagente no puede lanzar otros subagentes**, así que la profundidad es siempre 1.

### Matriz de permisos

Los permisos se declaran en cada `.kiro/agents/<nombre>.json` (campos `tools`, `allowedTools` y `toolsSettings`: `write`, `shell`, `subagent`).

| Agente | Config | read | write | shell | web_search | Imagen | subagent |
|--------|--------|------|-------|-------|------------|--------|----------|
| documentador-ficha-catalogo | JSON | ✅ | ✅ `output/<slug>/README.md` + su log | ✅ solo hora | ❌ | ❌ | ✅ (3 paralelo + analizador + auditor) |
| investigador-caracteristicas | JSON | ✅ | ✅ su log + `caracteristicas.json` | ✅ solo hora | ✅ | ❌ | ❌ |
| generador-imagenes | JSON | ✅ | ✅ `imagen-producto.svg` + su log | ✅ solo hora | ❌ | ✅ SVG | ❌ |
| buscador-opiniones | JSON | ✅ | ✅ su log | ✅ solo hora | ✅ | ❌ | ❌ |
| analizador-sentimiento | solo `.md` (`kiro_default`) | ✅ | ✅ su log + `opiniones.json` | ✅ solo hora | ❌ | ❌ | ❌ |
| auditor | JSON | ✅ | ✅ su log + `informe.md` | ✅ solo hora | ❌ | ❌ | ❌ |

### Shell (solo hora)

Todos los agentes y subagentes pueden usar **Shell únicamente** para obtener la fecha/hora local del sistema y registrar timestamps en sus logs (comandos en **Logging Standards**). Solo esos comandos están en `toolsSettings.shell.allowedCommands` y `denyByDefault: true` bloquea el resto. El analizador (subagente por defecto) no tiene esa restricción técnica: si pide otro comando, **recházalo**.

- **Prohibido**: cualquier otro comando Shell (listar archivos, instalar paquetes, scripts, etc.).
- **Obligatorio**: consultar la hora con Shell antes de escribir **Inicio**, cada fila de **Actividades** y **Fin** en el log.

### Reglas de invocación

- Profundidad máxima: 1 (`documentador-ficha-catalogo` → subagente)
- Fase 1 (paralela): `investigador-caracteristicas`, `generador-imagenes`, `buscador-opiniones`
- Fase 2 (secuencial): `analizador-sentimiento` con las opiniones del buscador
- Fase 3 (secuencial): `auditor`, tras consolidar el README
- Ningún agente modifica archivos en `.kiro/` (`toolsSettings.write.deniedPaths`)
- Consolidación final (`README.md`) solo la hace `documentador-ficha-catalogo`

### Escritura permitida por agente

| Agente | Archivos |
|--------|----------|
| documentador-ficha-catalogo | `output/<slug>/README.md`, `output/<slug>/log/documentador-ficha-catalogo.md` |
| investigador-caracteristicas | `output/<slug>/log/investigador-caracteristicas.md`, opcional `caracteristicas.json` |
| generador-imagenes | `output/<slug>/imagen-producto.svg`, `output/<slug>/log/generador-imagenes.md` |
| buscador-opiniones | `output/<slug>/log/buscador-opiniones.md` |
| analizador-sentimiento | `output/<slug>/log/analizador-sentimiento.md`, opcional `opiniones.json` |
| auditor | `output/<slug>/log/auditor.md`, `output/<slug>/log/informe.md` |

---

## Logging Standards

Cada instancia que atienda el caso (documentador o subagente) **debe** crear su propio archivo de log antes de trabajar y actualizarlo al terminar.

### Ubicación

```
output/<slug-producto>/log/<nombre-agente>.md
```

- `<slug-producto>`: nombre del producto en minúsculas, sin espacios (guiones), sin caracteres especiales. Ej: `iphone-15-pro`, `cafetera-nespresso`.
- `<nombre-agente>`: valor del campo `name` del JSON del agente (ej: `investigador-caracteristicas`); para el analizador, `analizador-sentimiento`.

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

Antes de escribir **Inicio**, cada fila de **Actividades** y **Fin**, ejecuta **exactamente** este comando Shell según el SO (cualquier variación queda fuera de `allowedCommands` y será denegada) (ver **Agent Permissions**: Shell solo para esto):

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
├── README.md            # Ficha consolidada (documentador-ficha-catalogo)
├── imagen-producto.svg  # Asset de imagen (ilustración SVG)
├── caracteristicas.json # Opcional: datos estructurados
├── opiniones.json       # Opcional: datos estructurados
└── log/
    ├── *.md             # Un log por agente
    └── informe.md       # Informe de trazabilidad (auditor)
```

### Estructura del README.md

```markdown
# Ficha de catálogo: {Nombre del producto}

> Generado el {fecha} — demo de agentes en paralelo (Kiro CLI)

## Descripción y características

{Texto narrativo + lista de especificaciones clave}

## Imagen

![{Nombre del producto}](./imagen-producto.svg)

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
- Markdown válido; imagen con path relativo `./imagen-producto.svg`
- Tono informativo de catálogo e-commerce, sin marketing exagerado

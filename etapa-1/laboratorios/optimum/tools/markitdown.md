# MarkItDown

Convierte PDF, DOCX, PPTX, HTML y otros formatos a Markdown antes de que el agente los lea. Tres modos: **CLI nativo**, **Docker** y **servidor MCP** (recomendado en Cursor).

Proyecto upstream: [microsoft/markitdown](https://github.com/microsoft/markitdown)

---

## Prerrequisitos comunes

- **Python 3.10+** en PATH (`python --version`).
- **Docker Desktop** (solo modo contenedor).
- Skill de conversión (opcional pero recomendada): copia desde el repo del taller o instala globalmente.

---

## Modo local (nativo, sin Docker)

Instala `markitdown-mcp` en un venv de usuario (`~/.local/markitdown-mcp/`):

```powershell
# Desde la skill markitdown-converter (si la tienes instalada)
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.agents\skills\markitdown-converter\scripts\install-native.ps1"
```

Verifica:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.agents\skills\markitdown-converter\scripts\check-prerequisites.ps1"
```

Conversión manual por CLI (sin MCP):

```powershell
& "$env:USERPROFILE\.local\markitdown-mcp\venv\Scripts\markitdown-mcp.exe" --help
# O instala el paquete markitdown en un venv y usa: markitdown input.pdf -o output.md
```

---

## Modo Docker

1. Asegúrate de que Docker Desktop está en ejecución.
2. Construye la imagen:

   ```powershell
   powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.agents\skills\markitdown-converter\scripts\build-image.ps1"
   ```

3. Conversión one-shot con contenedor:

   ```powershell
   docker run --rm -v "${PWD}:/workdir" markitdown-mcp:latest
   ```

4. Para usar Docker como backend del MCP, define la variable antes de arrancar el servidor:

   ```powershell
   $env:USE_MARKITDOWN_DOCKER = "1"
   ```

---

## Modo MCP (Cursor / Claude Code)

### Paso 1 — Instalar la skill globalmente (una vez por máquina)

```powershell
# Si tienes el repo de la skill localmente:
powershell -NoProfile -ExecutionPolicy Bypass -File ".\scripts\install.ps1"
```

Copia la skill a `%USERPROFILE%\.agents\skills\`, `%USERPROFILE%\.claude\skills\` y `%USERPROFILE%\.cursor\skills\`.

### Paso 2 — Configurar MCP en el proyecto

Desde la raíz del workspace donde trabajarás (p. ej. `case-01A-file-format`):

```powershell
$projectRoot = (Resolve-Path ".\case-01A-file-format").Path
powershell -NoProfile -ExecutionPolicy Bypass `
  -File "$env:USERPROFILE\.agents\skills\markitdown-converter\scripts\ensure-mcp-config.ps1" `
  -ProjectRoot $projectRoot
```

El script:

- Añade el servidor `markitdown` a `.cursor/mcp.json` (sin borrar otros MCP).
- Crea `.mcp.json` y `.claude/scripts/markitdown-mcp-docker.ps1` para Claude Code.
- Usa el launcher `run-mcp-docker.ps1` (nativo por defecto; Docker si `USE_MARKITDOWN_DOCKER=1`).

Ejemplo de entrada en `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "markitdown": {
      "command": "powershell",
      "args": [
        "-NoProfile",
        "-ExecutionPolicy", "Bypass",
        "-File", "<SKILL_ROOT>/scripts/run-mcp-docker.ps1"
      ],
      "env": {
        "MARKITDOWN_PROJECT_ROOT": "<RUTA_ABSOLUTA_DEL_WORKSPACE>",
        "MARKITDOWN_ENABLE_PLUGINS": "true"
      }
    }
  }
}
```

### Paso 3 — Activar en Cursor

1. **Cursor Settings → MCP** → confirma que `markitdown` está en verde.
2. Reinicia Cursor o inicia chat nuevo si acabas de añadir la config.
3. En Agent, prueba:

   ```prompt
   Usa la herramienta MCP convert_to_markdown con la URI file:///.../docs/file10.pdf
   y guarda el resultado como docs/file10.md
   ```

---

## Modos MCP resumidos

| Modo | Cuándo | URI de archivo |
|------|--------|----------------|
| **Nativo** (default) | Python instalado en `~/.local/markitdown-mcp` | Absoluta: `file:///H:/ruta/archivo.pdf` |
| **Docker** | `USE_MARKITDOWN_DOCKER=1` + imagen `markitdown-mcp:latest` | Relativa al proyecto: `file:///workdir/docs/archivo.pdf` |
| **URL remota** | Cualquier modo | `https://example.com/doc.pdf` (sin montar volúmenes) |

---

## Verificación

- El `.md` generado existe y tiene contenido (> 0 bytes).
- Tras convertir PDF → MD, repetir la Fase B del laboratorio y comparar tokens con la Fase A.

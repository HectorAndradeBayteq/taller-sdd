# Laboratorio: Compatibilidad de configuración entre agentes

## Objetivo

Mostrar, con un flujo práctico, cómo trasladar configuración de proyecto desde Cursor hacia Claude Code:

1. Reglas/skills del proyecto visibles en Cursor.
2. Configuración MCP visible en Cursor (`Tool & MCPs` y `.cursor/mcp.json`).
3. Migración equivalente en Claude con `CLAUDE.md` y `.mcp.json` (o comando `claude mcp add` con alcance de proyecto).

---

## Qué vas a comprobar

- Puedes mantener instrucciones de proyecto con contenido equivalente para dos agentes distintos.
- Puedes registrar el mismo servidor MCP inseguro de laboratorio en ambos clientes cambiando solo la ruta de configuración.
- La skill `azure-costos` puede trasladarse de Cursor a Claude copiando el directorio `.cursor` y renombrándolo a `.claude` (mismo `SKILL.md`, sin reescribir reglas).

---

## Prerrequisitos

- Tener este repositorio abierto como workspace.
- Cursor
- Claude Code

---

## Parte A — Instrucciones de proyecto equivalentes

### 1) Crear archivo AGENTS.md para Cursor

En la raíz de este laboratorio (etapa-1/laboratorios/config), crea `AGENTS.md` con reglas simples y observables:

```md
# Reglas del proyecto

- Responde en español.
- Si es necesario crear archivos su nombre debe tener al menos 2 palabras y usar kebab-case.
- Antes de editar, explica en una frase qué vas a cambiar.
- Al final de cada respuesta incluye el emoji 👍 para saber que estas considerando estas instrucciones.
```

### 2) Abrir el mismo workspace con Claude Code

```powershell
claude
```

### 3) Interacturar con ambos agentes
Ingresar el siguiente prompt en ambos agentes:

```prompt
Genera un archivo .txt en el directorio actual y escribe 'Hola, mundo!' en el archivo.
```

Comportamiento esperado:

|Cursor|Claude|
|---|---|
|Responde en español.|Comportamiento estándar de Claude.|
|Usa la convención de nombres de archivos.|-|
|Explica la intención antes de editar.|-|
|Incluye el emoji 👍 al final de la respuesta.|-|


### 4) Trasladar el comportamient de Cursor a Claude

- Genera un copia de AGENTS.md y renombralo a CLAUDE.md

- Reinicia el agente en Claude.

- Vuelve a interactuar con claude con el mismo prompt anterior.

- Comportamiento esperado: El comportamiento de Claude Code debe ser equivalente al de Cursor.



---

## Parte B — MCP Azure equivalente en Cursor y Claude

En este laboratorio la referencia es el servidor **Azure MCP Server** con namespace `pricing`.

### 1) Verificar MCP en Cursor

En Cursor puedes verlo en:
- `Tool & MCPs > Installed MCP Server > Azure MCP Server`
- archivo `.cursor/mcp.json`

Contenido esperado en `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "Azure MCP Server": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp@latest",
        "server",
        "start",
        "--namespace",
        "pricing"
      ]
    }
  }
}
```

### 2) Llevarlo a Claude con archivo `.mcp.json`

En la raíz del proyecto **crea o actualiza `.mcp.json`** con una definición equivalente:

```json
{
  "mcpServers": {
    "azure-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp@latest",
        "server",
        "start",
        "--namespace",
        "pricing"
      ]
    }
  }
}
```

### 3) Alternativa por comando en Claude CLI

También puedes registrar el MCP sin editar manualmente el archivo:

```powershell
claude mcp add --transport stdio "azure-mcp-server" -- npx -y @azure/mcp@latest server start --namespace pricing --scope project
```

Importante:
- Con `--scope project` la configuración queda en el proyecto actual.
- Si omites `--scope project`, Claude lo puede registrar como **local de usuario**, modificando el archivo global `.claude.json`.
- Dependiendo del sistema operativo y el MCP Server, el comando puede ser diferente.

### 4) Reiniciar Claude y validar

Tras copiar/crear archivos o ejecutar el comando, reinicia Claude y valida que el MCP quede disponible en el proyecto.

---

## Parte C — Skill portable (Cursor → Claude)

### Caso de ejemplo: `azure-costos`

En este laboratorio la skill de referencia es **`azure-costos`**, ubicada en:

```
.cursor/skills/azure-costos/SKILL.md
```

Qué hace:
- Estima costos de servicios Azure con precios retail en tiempo real (Azure MCP Server, Parte B).
- Hace preguntas clave (servicio, SKU, región, modelo de precio, uso, moneda).
- Invoca la herramienta `pricing get` y devuelve un desglose mensual orientativo.

No hace falta duplicar la lógica en `CLAUDE.md`: el mismo archivo `SKILL.md` sirve en ambos agentes.

### 1) Verificar la skill en Cursor

1. Abre el workspace en `etapa-1/laboratorios/config`.
2. Comprueba que existe `.cursor/skills/azure-costos/SKILL.md`.
3. En Cursor: `Settings > Rules, Skills, Subagents` → proyecto **config** → pestaña **Skills** → debe aparecer `azure-costos`.
4. Asegúrate de tener el MCP de la Parte B activo (`Azure MCP Server` / namespace `pricing`).

Prompt de prueba:

```prompt
¿Cuánto cuesta una VM Standard_D2s_v5 en eastus corriendo 24/7?
```

Comportamiento esperado en Cursor:
- Pregunta o confirma SKU, región y modelo Consumption si faltan datos.
- Usa el MCP `pricing get` (no inventa precios).
- Responde con tabla de estimación y supuestos (730 h/mes, precios retail, etc.).

### 2) Trasladar a Claude: copiar `.cursor` → `.claude`

Claude Code descubre skills en `.claude/skills/<nombre>/SKILL.md` con el **mismo formato** que Cursor (frontmatter YAML + cuerpo Markdown). La forma más directa de portar la skill es copiar el directorio completo:

```powershell
cd etapa-1/laboratorios/config

# Si ya tienes .claude de pruebas anteriores, elimínalo o fusiona skills a mano
Copy-Item -Recurse -Force .cursor .claude
```

Estructura resultante:

```
.claude/
├── mcp.json          # copiado desde .cursor (Se puede eliminar porque claude code no lo usa aquí)
└── skills/
    └── azure-costos/
        └── SKILL.md  # idéntico al de Cursor
```

Equivalencia de rutas:

| Pieza | Cursor | Claude Code |
|-------|--------|-------------|
| Skill | `.cursor/skills/azure-costos/SKILL.md` | `.claude/skills/azure-costos/SKILL.md` |
| Invocación manual | Según UI de Cursor | `/azure-costos` |
| MCP (Parte B) | `.cursor/mcp.json` | `.mcp.json` en la raíz del proyecto |

**Importante:** 
- Claude lee `.mcp.json` en la raíz (ya configurado en la Parte B), no el `mcp.json` que quede dentro de `.claude/` al copiar. No necesitas mover nada más para el MCP si completaste la Parte B.
- Si usas MAC, en lugar de copiar la skill puedes crear un enlace simbólico con `ln -s .cursor .claude`.

### 3) Reiniciar Claude y validar

```powershell
claude
```

1. Comprueba que la skill aparece (por ejemplo con `/azure-costos` o listando skills del proyecto).
2. Verifica que el MCP `azure-mcp-server` sigue activo (Parte B).
3. Usa el **mismo prompt** que en Cursor:

```prompt
¿Cuánto cuesta una VM Standard_D2s_v5 en eastus corriendo 24/7?
```

Comportamiento esperado en Claude:
- Mismo flujo que en Cursor: preguntas clave → `pricing get` → desglose mensual.
- Misma skill (`SKILL.md` sin cambios), solo cambió la carpeta contenedora (`.cursor` → `.claude`).

Si el comportamiento difiere, revisa que `.claude/skills/azure-costos/SKILL.md` exista y que `.mcp.json` esté en la raíz del laboratorio, no solo dentro de `.claude/`.

---

## Mapa de equivalencias

| Concepto | Cursor | Claude |
|---|---|---|
| Instrucciones de proyecto | `AGENTS.md` | `CLAUDE.md` |
| Configuración MCP | `.cursor/mcp.json` | `.mcp.json` (proyecto) o `.claude.json` (local usuario) |
| Skill personalizada | `.cursor/skills/azure-costos/SKILL.md` | `.claude/skills/azure-costos/SKILL.md` (copiar `.cursor` → `.claude`) |

---

## Criterios de éxito del laboratorio

- Existe `AGENTS.md` y `CLAUDE.md` con políticas equivalentes.
- Existe `.cursor/mcp.json` y `.mcp.json` apuntando al Azure MCP Server con `--namespace pricing`.
- Si se usa CLI, se documenta el uso de `--scope project` para evitar escribir en `.claude.json` global.
- Se ejecuta una prueba funcional en ambos clientes con resultado comparable.
- Se copia `.cursor` a `.claude` y se valida `azure-costos` en ambos agentes con el mismo prompt.

---

## Recomendaciones prácticas

- Después de crear o modificar `.mcp.json`, reinicia Claude para asegurar que la nueva configuración MCP sea reconocida.
- Si registras el MCP por CLI, usa `--scope project` para mantener la configuración en el repo y evitar cambios globales en `.claude.json`.
- Mantén los nombres de servidor alineados entre `.cursor/mcp.json` y `.mcp.json` para facilitar soporte y troubleshooting.
- Tras el reinicio, valida de inmediato que el servidor aparezca y responde una prueba corta de tools.
- Si no aparece el MCP, revisa primero sintaxis JSON, luego el alcance (`project` vs local usuario) y por último reinicia nuevamente.

---

## Conclusión

La compatibilidad entre agentes no es binaria ni perfecta por ahora, pero en la práctica hay una capa portable clara: instrucciones de proyecto, definición base de MCP y reglas de comportamiento de skills. Si diseñas estas piezas por intención (no por sintaxis exacta), puedes migrar o operar entre Cursor, Claude Code u otros agentes con poco esfuerzo.
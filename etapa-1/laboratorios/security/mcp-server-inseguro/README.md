# MCP inseguro — instalación y puesta en marcha

Servidor MCP mínimo (stdio) usado **solo** en el [Laboratorio 7: Seguridad](../README.md). No lo uses fuera del taller ni lo conectes a proyectos reales.

## Requisitos

- **Node.js** 18 o superior (`node --version`)
- **Cursor** o **OpenCode** con MCP habilitado
- Raíz del workspace: carpeta del repositorio `taller-sdd` (recomendado)

## 1. Instalar dependencias

Desde esta carpeta:

```powershell
cd etapa-1\laboratorios\security\mcp-server-inseguro
npm install
```

Comprueba que arranca sin errores (debe quedarse en espera; detén con `Ctrl+C`):

```powershell
npm start
```

> El servidor habla por **stdin/stdout**. Si lo ejecutas en una terminal normal no verás salida hasta que un cliente MCP se conecte; eso es esperado.

## 2. Registrar el servidor en Cursor

1. Abre la configuración MCP del usuario: **Command Palette** → `MCP: Open User Configuration` (o el equivalente en tu versión de Cursor).
2. Añade el bloque `lab-inseguro` en `mcpServers`.

### Windows (ruta absoluta recomendada)

Sustituye `H:\PROJECTS\BAYTEQ\taller-sdd` por la ruta real de tu clon:

```json
{
  "mcpServers": {
    "lab-inseguro": {
      "command": "node",
      "args": [
        "H:\\PROJECTS\\BAYTEQ\\taller-sdd\\etapa-1\\laboratorios\\security\\mcp-server-inseguro\\index.mjs"
      ]
    }
  }
}
```

### macOS / Linux

```json
{
  "mcpServers": {
    "lab-inseguro": {
      "command": "node",
      "args": [
        "/ruta/al/taller-sdd/etapa-1/laboratorios/security/mcp-server-inseguro/index.mjs"
      ]
    }
  }
}
```

Puedes copiar la plantilla [cursor-mcp.example.json](./cursor-mcp.example.json) y ajustar las rutas.

3. **Reinicia Cursor** o recarga servidores MCP desde ajustes.
4. En **Settings → MCP**, verifica que `lab-inseguro` aparece en verde y expone la herramienta `get_integration_context`.

## 2b. Registrar el servidor en OpenCode

1. Copia la plantilla [opencode.example.json](./opencode.example.json) a `.opencode/opencode.json` en la raíz de `taller-sdd` (o ajusta tu `opencode.json` existente).
2. Sustituye las rutas e IP de LM Studio por las de tu entorno.
3. **Reinicia OpenCode** o abre una sesión nueva en el proyecto.
4. Verifica que `lab-inseguro` expone las herramientas `get_integration_context` y `acme_telemetry`.

> OpenCode usa `"type": "local"` y `"command"` como un **array** `[ejecutable, ...args]`. No uses el formato de Cursor (`command` + `args` separados).
>
> No hace falta dejar `npm start` corriendo en otra terminal: OpenCode lanza el proceso MCP según `command`.

### Windows (ruta absoluta recomendada)

Sustituye `H:\PROJECTS\BAYTEQ\taller-sdd` por la ruta real de tu clon:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "lab-inseguro": {
      "type": "local",
      "enabled": true,
      "command": [
        "node",
        "H:\\PROJECTS\\BAYTEQ\\taller-sdd\\etapa-1\\laboratorios\\security\\mcp-server-inseguro\\index.mjs"
      ],
      "timeout": 10000
    }
  }
}
```

### macOS / Linux

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "lab-inseguro": {
      "type": "local",
      "enabled": true,
      "command": [
        "node",
        "/ruta/al/taller-sdd/etapa-1/laboratorios/security/mcp-server-inseguro/index.mjs"
      ],
      "timeout": 10000
    }
  }
}
```

El bloque `provider` (LM Studio u otro) es opcional; inclúyelo solo si usas un modelo local compatible con OpenAI API.

## 3. Comprobar la herramienta (opcional)

En el chat del agente, pide explícitamente:

> Usa la herramienta MCP `get_integration_context` del servidor `lab-inseguro` para obtener los requisitos de integración.

Deberías ver en el resultado texto con tabla de API y el bloque `SYSTEM OVERRIDE` (eso es la carga del ataque).

## Estructura

| Archivo | Función |
|---------|---------|
| `index.mjs` | Servidor stdio y herramienta maliciosa |
| `package.json` | Dependencias (`@modelcontextprotocol/sdk`) |
| `cursor-mcp.example.json` | Plantilla de configuración para Cursor |
| `opencode.example.json` | Plantilla de configuración para OpenCode |

## Solución de problemas

| Síntoma | Qué revisar |
|---------|-------------|
| El servidor no aparece en MCP | Ruta absoluta correcta, Node en PATH, reinicio del cliente |
| Error al iniciar MCP | Ejecutar `npm install` y `npm start` en esta carpeta |
| Timeout al conectar (OpenCode) | Aumentar `"timeout"` en el bloque MCP (p. ej. `30000`) |
| La herramienta no se invoca | Pedir por nombre; confirmar que el agente tiene permiso para usar MCP |
| `node` no reconocido | Instalar Node LTS y abrir el cliente desde una terminal donde `node` funcione |

## Desinstalación

Tras el laboratorio, elimina el bloque `lab-inseguro` de tu `mcp.json` (Cursor) o `opencode.json` (OpenCode) y recarga MCP.

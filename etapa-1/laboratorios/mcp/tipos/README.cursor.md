# Laboratorio 4C: Tipos de MCP — locales y remotos (ruta Cursor)

> Esta es la **ruta Cursor** del laboratorio. La ruta Kiro está en [README.kiro.md](./README.kiro.md). La ruta equivalente en Claude Code está en [README.claude.md](./README.claude.md).

## Objetivo

Distinguir en la práctica los dos tipos de servidor MCP — **local (stdio)** y **remoto (HTTP + OAuth)** — instalando uno de cada tipo en **Cursor**: el MCP de **Playwright** como ejemplo local y el MCP remoto de **Azure DevOps** como ejemplo remoto. Cada paso incluye su equivalente en **Kiro** y **Claude Code**, para que la configuración sea portable entre clientes.

Al final del laboratorio podrás:

1. Explicar qué cambia entre un MCP local y uno remoto: dónde corre el proceso, cómo se autentica y qué datos cruzan la frontera de tu máquina.
2. Configurar un MCP local y uno remoto en Cursor (`.cursor/mcp.json` y `~/.cursor/mcp.json`), y traducir esa configuración a `.kiro/settings/mcp.json` (Kiro) y `.mcp.json` (Claude Code).
3. Aplicar mínimo privilegio en un MCP remoto: limitar toolsets, forzar solo lectura y controlar qué tools se aprueban automáticamente.

**Prerrequisitos:**

- [Laboratorio 4: MCP (fundamentos)](../fundamentos/README.md) — qué es MCP y cómo se configura un primer servidor.
- Opcional: [Laboratorio 6: Compatibilidad de configuración entre agentes](../../config/README.md) — equivalencias de archivos entre clientes.
- **Cursor** instalado (ruta de este archivo). Opcional: **Kiro** y/o **Claude Code** para las equivalencias.
- **Node.js** v20 o superior y **npm**.
- Para la Fase B remota: una **organización de Azure DevOps conectada a Microsoft Entra ID** (las organizaciones con cuenta personal MSA no son compatibles) y el **Client ID** de un *App Registration* que el instructor comparte (ver [Preparación del instructor](#preparación-del-instructor-fase-b)).
- Si la organización **no** tiene la aplicación **Azure DevOps MCP**, la Fase B se hace con la [alternativa con PAT](#alternativa-con-pat--mcp-local): un token de solo lectura en la variable de usuario `ADO_PAT`. No hace falta Client ID.

**Material técnico del laboratorio:** [`.cursor/mcp.json`](./.cursor/mcp.json) (Cursor), [`.kiro/settings/mcp.json`](./.kiro/settings/mcp.json) (Kiro), [`.mcp.json`](./.mcp.json) (Claude Code), [`snippets/`](./snippets/) (configuraciones de Azure DevOps por cliente) y [`evidencia/`](./evidencia/README.md) (salidas del ejercicio).

---

## Marco teórico

### Dos tipos de servidor MCP

El protocolo MCP define **cómo** cliente y servidor intercambian mensajes (JSON-RPC); el **transporte** define **por dónde** viajan. De ahí salen los dos tipos que verás en cualquier cliente:

| Aspecto | MCP local (stdio) | MCP remoto (Streamable HTTP) |
|---------|-------------------|------------------------------|
| Dónde corre | Proceso hijo que el IDE lanza en **tu máquina** | Servicio alojado por un **tercero** en la nube |
| Cómo se declara | `command` + `args` (p. ej. `npx ...`) | `url` (+ `headers` opcionales) |
| Instalación | Necesita el runtime (Node, Python, Docker…) | Ninguna; solo red saliente HTTPS |
| Autenticación | Hereda tu sesión local o variables de entorno | **OAuth 2.1** en el navegador (o token en `headers`) |
| Actualizaciones | Tú fijas la versión (`@0.0.83`) | Las publica el proveedor |
| Datos | Se quedan en tu máquina, salvo lo que el servidor envíe | Viajan al proveedor en cada llamada |
| Ejemplo del lab | **Playwright** controla un navegador local | **Azure DevOps** consulta work items y repos |

```
LOCAL   Agente ──tool call──► Cursor ──stdin/stdout──► proceso npx (tu PC) ──► navegador
REMOTO  Agente ──tool call──► Cursor ──HTTPS + token──► mcp.dev.azure.com ──► tu organización
```

En ambos casos el modelo **no ejecuta nada**: pide una tool, Cursor la ejecuta contra el servidor y el resultado vuelve al contexto (ver [Laboratorio extra: Agent Loop](../../agent-loop/README.md)).

### OAuth en MCP remotos: por qué a veces hace falta un *Client ID*

Al conectarse a un MCP remoto protegido, el cliente necesita un **Client ID** para iniciar el flujo OAuth. Hay dos formas de obtenerlo:

| Mecanismo | Cómo funciona | Ejemplo |
|-----------|---------------|---------|
| **Dynamic Client Registration (DCR)** | El cliente se registra solo contra el servidor; tú no configuras nada | La mayoría de MCP remotos |
| **Client ID pre-registrado** | Un administrador crea un *App Registration* y tú pegas su Client ID en la configuración | **Azure DevOps** (Microsoft Entra no soporta DCR) |

Por eso el MCP de Azure DevOps funciona “sin configuración” en VS Code y Visual Studio (Microsoft ya registró esos clientes), mientras que **Cursor, Claude Code y Kiro** necesitan un App Registration propio en Entra. El protocolo es el mismo; lo que cambia es quién tiene un Client ID reconocido por el proveedor de identidad.

En Cursor el Client ID va en `auth.CLIENT_ID` y el callback OAuth usa `http://localhost:8787/callback`. Esa URI tiene que estar registrada en el App Registration.

### Equivalencias entre clientes

| Concepto | Cursor | Kiro | Claude Code |
|----------|--------|------|-------------|
| Config de **proyecto** | `.cursor/mcp.json` | `.kiro/settings/mcp.json` | `.mcp.json` (raíz) |
| Config de **usuario** | `~/.cursor/mcp.json` | `~/.kiro/settings/mcp.json` | `~/.claude.json` (`claude mcp add --scope user`) |
| Precedencia | Proyecto > usuario | Proyecto > usuario | local > proyecto > usuario |
| Server local | `command`, `args`, `env` | `command`, `args`, `env` | `type: "stdio"`, `command`, `args`, `env` |
| Server remoto | `url`, `type: "http"`, `headers` | `url`, `headers` (sin `type`) | `type: "http"`, `url`, `headers` |
| Client ID OAuth | `auth.CLIENT_ID` | `oauth.clientId` + `oauth.redirectUri` | `oauth.clientId` + `oauth.callbackPort` |
| Desactivar server | Toggle en *Settings → Tools & MCP* | `"disabled": true` | `/mcp` → disable |
| Aprobar tools sin preguntar | Allowlist en ajustes del agente | `autoApprove: ["tool"]` | `permissions.allow` en `.claude/settings.json` (`mcp__server__tool`) |
| Ocultar tools | Toggle por tool | `disabledTools: ["tool"]` | `permissions.deny` |
| Variables de entorno | `${env:VAR}` | `${VAR}` (aprobadas en *Mcp Approved Env Vars*) | `${VAR}` |
| Ver estado | *Settings → Tools & MCP* | Panel de Kiro → **MCP Servers** | `/mcp` |

Referencias: **[Cursor — MCP](https://cursor.com/docs/context/mcp)**, **[Kiro — MCP configuration](https://kiro.dev/docs/mcp/configuration/)**, **[Claude Code — MCP](https://code.claude.com/docs/en/mcp)**.

---

## Componentes del laboratorio

Diagrama de componentes del laboratorio:

```mermaid
flowchart LR
    U[Participante] --> C[Agente en Cursor]

    subgraph PC["Tu máquina"]
        C -->|stdio| PW["Playwright MCP<br/>npx @playwright/mcp"]
        PW --> BR[Navegador Chromium]
        C --> EV["evidencia/"]
    end

    subgraph NUBE["Nube de Microsoft"]
        ADO["Azure DevOps MCP<br/>mcp.dev.azure.com"] --> ORG[(Tu organización<br/>work items · repos)]
        ENTRA[Microsoft Entra ID]
    end

    C -->|"HTTPS + token OAuth"| ADO
    C -.->|"login en navegador<br/>(Client ID del App Registration)"| ENTRA
    BR -->|"internet"| DEMO["demo.playwright.dev/todomvc"]
```

Estructura de archivos:

```
tipos/
├── README.kiro.md                     # Ruta Kiro
├── README.cursor.md                   # Este archivo (ruta Cursor)
├── README.claude.md                   # Ruta Claude Code
├── .cursor/mcp.json                   # Cursor: Playwright (local)
├── .kiro/settings/mcp.json            # Kiro: Playwright (local)
├── .mcp.json                          # Claude Code: Playwright (local)
├── snippets/
│   ├── ado-remoto.cursor.json         # Azure DevOps remoto para Cursor
│   ├── ado-remoto.kiro.json           # Azure DevOps remoto para Kiro
│   ├── ado-remoto.claude.json         # Azure DevOps remoto para Claude Code
│   ├── ado-local.plan-b.cursor.json   # Plan B: Azure DevOps local (stdio) para Cursor
│   ├── ado-local.plan-b.kiro.json     # Plan B para Kiro
│   ├── ado-local.plan-b.claude.json   # Plan B para Claude Code
│   ├── ado-local-pat.cursor.json      # Alternativa: Azure DevOps local con PAT
│   ├── ado-local-pat.kiro.json        # PAT para Kiro
│   └── ado-local-pat.claude.json      # PAT para Claude Code
└── evidencia/                         # Salidas (gitignored salvo README)
```

---

## Pasos

### Preparación

1. Abre la carpeta `etapa-1/laboratorios/mcp/tipos` como **workspace** en Cursor (`File → Open Folder`).
2. Comprueba Node y npm:

   ```powershell
   node -v   # v20 o superior
   npm -v
   ```

3. En Cursor, abre **Settings → Tools & MCP** y confirma que el soporte MCP está disponible. Ahí verás el estado de cada servidor durante el laboratorio.

#### Preparación del instructor (Fase B)

El MCP remoto de Azure DevOps exige un *App Registration* en Microsoft Entra. Lo crea **una sola vez el instructor** (o un administrador del tenant) y comparte el **Client ID** con el grupo:

1. Verifica que la aplicación empresarial **Azure DevOps MCP** esté aprovisionada en el tenant.
2. En **Microsoft Entra admin center → App registrations → New registration**, crea `taller-sdd-mcp`.
3. En **Authentication → Add redirect URI → Mobile and desktop applications**, agrega las tres URIs (una por cliente):

   | Cliente | Redirect URI |
   |---------|--------------|
   | **Cursor** (esta ruta) | `http://localhost:8787/callback` |
   | Kiro | `http://localhost:3119/oauth/callback` |
   | Claude Code | `http://localhost:3118/callback` |

4. En la pestaña **Settings** de Authentication, activa **Allow public client flows** (los clientes de este laboratorio usan PKCE, sin secreto).
5. En **API permissions → Add a permission → APIs my organization uses**, busca **Azure DevOps MCP** (`2a72489c-aab2-4b65-b93a-a91edccf33b8`) y agrega solo los permisos delegados de **lectura** que usará el taller.
6. Selecciona **Grant admin consent** y copia el **Application (client) ID**.

> El Client ID **no es un secreto**, pero sí es específico del tenant: no lo publiques en repositorios abiertos. Nunca uses *client secrets* en este laboratorio.

---

### Fase A — MCP local: Playwright

**Meta:** levantar un servidor MCP que corre como proceso en tu máquina y verificar que el agente controla un navegador local.

1. Revisa la configuración del proyecto en [`.cursor/mcp.json`](./.cursor/mcp.json):

   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": ["-y", "@playwright/mcp@0.0.83", "--isolated", "--viewport-size=1280x720"]
       }
     }
   }
   ```

   | Campo | Qué hace |
   |-------|----------|
   | `command` / `args` | Cursor lanza `npx`, que descarga y ejecuta **una versión fija** del servidor |
   | `--isolated` | Perfil de navegador temporal: no usa tus cookies ni sesiones |
   | Sin `url` | Cursor infiere transporte **stdio** porque el servidor declara `command` |

   Cursor aprueba tools en la **allowlist de los ajustes del agente**, no con un campo del JSON. Para reproducir el mínimo privilegio del laboratorio: deja que `browser_click` y `browser_type` pidan confirmación en el chat, y —si quieres el equivalente de `autoApprove`— agrega solo `browser_snapshot` a esa allowlist.

2. Cursor detecta `.cursor/mcp.json` al abrir el workspace. Si `playwright` no aparece, guarda el archivo de nuevo o recarga la ventana.
3. En **Settings → Tools & MCP**, confirma que `playwright` aparece **conectado** (indicador en verde) y revisa su lista de tools (`browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_take_screenshot`…).

   > La primera vez `npx` descarga el paquete y el navegador puede tardar en instalarse. Si el servidor falla, el error queda en la misma pantalla de **Tools & MCP**.

4. Comprueba que es un proceso **local** mientras el servidor está activo:

   ```powershell
   Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
     Where-Object CommandLine -match 'playwright/mcp' |
     Select-Object ProcessId, CommandLine
   ```

5. En el chat de Cursor (modo **Agent**), ejecuta:

   ```prompt
   Usa el MCP de Playwright para:
   1. Abrir https://demo.playwright.dev/todomvc
   2. Agregar las tareas "Configurar MCP local" y "Configurar MCP remoto"
   3. Marcar como completada la primera
   4. Tomar una captura y guardarla en evidencia/playwright-todomvc.png
   5. Escribir en evidencia/playwright-resumen.md qué tools usaste y en qué orden
   ```

6. Observa las solicitudes de aprobación: las tools que estén en la allowlist se ejecutan solas; `browser_click` y `browser_type` piden confirmación si no las agregaste.

#### Equivalencia en Kiro y Claude Code

| Cliente | Cómo instalarlo | Cómo verificarlo |
|---------|-----------------|------------------|
| **Kiro** | Ya incluido en [`.kiro/settings/mcp.json`](./.kiro/settings/mcp.json); abre la carpeta en Kiro. Ahí `autoApprove` incluye `browser_snapshot` | Panel **MCP Servers** → `playwright` conectado |
| **Claude Code** | Ya incluido en [`.mcp.json`](./.mcp.json) (`"type": "stdio"`); o bien: `claude mcp add playwright --scope project -- npx -y @playwright/mcp@0.0.83 --isolated --viewport-size=1280x720` | Ejecuta `claude`, acepta el servidor del proyecto y usa `/mcp` |

> Los tres archivos describen el mismo comando. Cursor y Kiro infieren stdio por la presencia de `command`; Claude Code lo declara con `"type": "stdio"`.

---

### Fase B — MCP remoto: Azure DevOps

**Meta:** conectar un servidor que **no corre en tu máquina**, autenticarte con OAuth y restringir lo que el agente puede hacer.

> Si tu organización no tiene la aplicación **Azure DevOps MCP**, sáltate esta fase remota y sigue la [alternativa con PAT](#alternativa-con-pat--mcp-local).

1. Abre la configuración **de usuario** de Cursor: `~/.cursor/mcp.json` (en Windows, `%USERPROFILE%\.cursor\mcp.json`). Créalo si no existe.

   > Usamos el nivel de usuario porque la organización y el Client ID son **personales o del tenant**, no del repositorio. Playwright, en cambio, vive en el proyecto porque todo el equipo lo usa igual. La precedencia es proyecto > usuario: el `playwright` de `.cursor/mcp.json` sigue activo y `azure-devops` se suma desde el archivo de usuario.

2. Copia el contenido de [`snippets/ado-remoto.cursor.json`](./snippets/ado-remoto.cursor.json) dentro de `mcpServers` (fusiona con lo que ya tengas; no borres otros servidores) y reemplaza `{organization}` y `{client-id}`:

   ```json
   {
     "mcpServers": {
       "azure-devops": {
         "url": "https://mcp.dev.azure.com/{organization}",
         "type": "http",
         "headers": {
           "X-MCP-Toolsets": "wit,repos",
           "X-MCP-Readonly": "true"
         },
         "auth": {
           "CLIENT_ID": "{client-id}"
         }
       }
     }
   }
   ```

   | Campo | Qué hace |
   |-------|----------|
   | `url` + `type: "http"` | Endpoint alojado por Microsoft; el transporte es HTTP, no un proceso local |
   | `X-MCP-Toolsets` | Expone solo **work items** y **repos** (en lugar de todo el catálogo: pipelines, wiki, test plans…) |
   | `X-MCP-Readonly` | El servidor oculta todas las tools de escritura (crear, actualizar, votar…) |
   | `auth.CLIENT_ID` | Client ID del App Registration; Cursor omite DCR y usa este |
   | Callback `http://localhost:8787/callback` | Lo abre Cursor al autenticar; debe coincidir **exactamente** con el registrado en Entra |

3. Guarda el archivo. En **Settings → Tools & MCP**, localiza `azure-devops` y pulsa **Authenticate**. Cursor **abre el navegador** con el login de Microsoft. Inicia sesión con tu cuenta de la organización y acepta el consentimiento.
4. Vuelve a **Tools & MCP**: `azure-devops` debe aparecer conectado. Compara su lista de tools con la tabla del [Marco teórico](#dos-tipos-de-servidor-mcp): solo verás tools de lectura (`wit_work_item`, `repo_pull_request`, `search_code`…), ninguna terminada en `_write`.
5. Comprueba que esta vez **no** hay proceso local nuevo (repite el comando del paso A.4: solo aparece Playwright).
6. En el chat de Cursor (modo **Agent**), ejecuta:

   ```prompt
   Usa el MCP de Azure DevOps para:
   1. Listar los proyectos de mi organización
   2. Mostrar los work items asignados a mí
   3. Listar los pull requests activos del proyecto <proyecto>
   Escribe un resumen en evidencia/ado-resumen.md indicando qué tools usaste.
   ```

   Aprueba cada tool en el chat. En esta fase no agregues tools remotas a la allowlist: cada llamada debe pedir confirmación.

7. Prueba el límite de solo lectura:

   ```prompt
   Crea un work item de tipo Task llamado "Prueba MCP" en el proyecto <proyecto>.
   ```

   > El agente debería responder que no tiene una tool para hacerlo. El control no depende del modelo ni de un prompt: el **servidor** no expone la tool. Esa es la diferencia entre una restricción declarativa y una instrucción en `AGENTS.md`.

8. **Opcional:** en **Settings → Tools & MCP**, desactiva `azure-devops` y verifica que deja de ofrecer tools sin que pierdas el JSON de `~/.cursor/mcp.json`. Vuelve a activarlo antes de la Fase C si quieres usarlo en la comparación.

#### Equivalencia en Kiro y Claude Code

| Cliente | Configuración | Autenticación |
|---------|---------------|---------------|
| **Kiro** | Copia [`snippets/ado-remoto.kiro.json`](./snippets/ado-remoto.kiro.json) en `~/.kiro/settings/mcp.json` (`oauth.clientId` y `oauth.redirectUri`) | Kiro abre el navegador al guardar |
| **Claude Code** | `claude mcp add --transport http azure-devops https://mcp.dev.azure.com/{organization} --client-id {client-id} --callback-port 3118 --header "X-MCP-Readonly: true" --header "X-MCP-Toolsets: wit,repos" --scope user` — o el JSON de [`snippets/ado-remoto.claude.json`](./snippets/ado-remoto.claude.json) | Ejecuta `claude` → `/mcp` → selecciona `azure-devops` → login en navegador |

> Los tres clientes envían los mismos `headers` al mismo `url`. Solo cambia **dónde** se declara el Client ID y **qué puerto** usa el callback OAuth, por eso el App Registration tiene una redirect URI por cliente.

#### Plan B — MCP local de Azure DevOps

Si tu organización no está en Entra, o no es posible crear el App Registration, usa el **servidor local** oficial: el mismo catálogo de tools, pero corriendo con `npx` y autenticado con el inicio de sesión interactivo de Microsoft (por defecto).

1. Copia [`snippets/ado-local.plan-b.cursor.json`](./snippets/ado-local.plan-b.cursor.json) a `~/.cursor/mcp.json` (fusiona el servidor con los que ya tengas) y reemplaza `{organization}`.
2. El argumento `-d core work-items repositories` cumple el papel de `X-MCP-Toolsets`: limita los dominios cargados.
3. Repite los prompts del paso B.6. La primera llamada abre el login de Microsoft en el navegador.

> El Plan B convierte el ejemplo “remoto” en uno **local**: el tipo de MCP depende de **dónde corre el servidor**, no de qué servicio consulta. Un MCP local también puede hablar con la nube.

#### Alternativa con PAT — MCP local

Si la organización **no tiene aprovisionada la aplicación Azure DevOps MCP**, el servidor remoto `https://mcp.dev.azure.com` no está disponible. Usa el mismo servidor local, autenticado con un **Personal Access Token** en lugar del login interactivo. `npx` corre en tu máquina y cada llamada sale hacia Azure DevOps con ese token.

El PAT es un secreto. Vive en una variable de entorno de tu usuario y el JSON solo la **referencia**. No lo pegues en el repositorio ni en el chat.

1. En Azure DevOps abre **User settings → Personal access tokens → New Token**. Ámbito: solo tu organización. Expiración corta, la del taller. Scopes personalizados, únicamente de lectura:
   - **Work Items**: Read
   - **Code**: Read
   - **Project and Team**: Read
2. El servidor no acepta el PAT en claro. `PERSONAL_ACCESS_TOKEN` debe ser el **base64** de `correo:pat`. El correo puede ser cualquier valor no vacío; en este laboratorio usa `participante@contoso.com`.
3. Guarda ese valor en la variable de usuario `ADO_PAT`. En PowerShell el PAT no se muestra al pegarlo:

   ```powershell
   $correo = "participante@contoso.com"
   $pat = Read-Host "Pega el PAT" -AsSecureString
   $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($pat)
   try {
     $plain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
     $encoded = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("${correo}:${plain}"))
     [Environment]::SetEnvironmentVariable("ADO_PAT", $encoded, "User")
   } finally {
     [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
     $plain = $null
   }
   ```

   Cierra Cursor por completo y ábrelo de nuevo: el proceso solo hereda variables de usuario que ya existían al arrancar. Comprueba en una terminal nueva, sin imprimir el valor:

   ```powershell
   if ([string]::IsNullOrEmpty([Environment]::GetEnvironmentVariable("ADO_PAT", "User"))) {
     "ADO_PAT no está definida"
   } else {
     "ADO_PAT está definida"
   }
   ```

4. En `~/.cursor/mcp.json`, usa [`snippets/ado-local-pat.cursor.json`](./snippets/ado-local-pat.cursor.json) **en lugar** del bloque remoto `azure-devops` y reemplaza `{organization}` (el nombre de `https://dev.azure.com/{organization}`):

   ```json
   {
     "mcpServers": {
       "azure-devops": {
         "command": "npx",
         "args": [
           "-y",
           "@azure-devops/mcp",
           "{organization}",
           "--authentication", "pat",
           "-d", "core", "work-items", "repositories"
         ],
         "env": {
           "PERSONAL_ACCESS_TOKEN": "${env:ADO_PAT}"
         }
       }
     }
   }
   ```

   | Campo | Qué hace |
   |-------|----------|
   | `command` / `args` | Cursor lanza el servidor local; no hay `url` |
   | `--authentication pat` | Lee el token de `PERSONAL_ACCESS_TOKEN` en lugar del login interactivo |
   | `${env:ADO_PAT}` | Cursor interpola la variable de usuario. El JSON no contiene el token |
   | `-d core work-items repositories` | Equivale a `X-MCP-Toolsets`: solo esos dominios |

   Cuando conecte, fija en `args` la versión que resolvió npm (`npm view @azure-devops/mcp version`), del mismo modo que Playwright usa `@0.0.83`.

5. En **Settings → Tools & MCP**, `azure-devops` debe aparecer conectado. Repite el comando del paso A.4 con el filtro `azure-devops/mcp`: tiene que aparecer un proceso `node` local.
6. Repite los prompts del paso B.6.
7. Pide crear un work item, como en el paso B.7. Con el remoto y `X-MCP-Readonly` la tool de escritura no existe. Con un PAT de solo lectura la tool **puede aparecer**, y es la API de Azure DevOps la que rechaza la llamada. El control está en los scopes del token.

> En Kiro y Claude Code el mismo secreto se referencia como `${ADO_PAT}` (en Kiro, además, hay que aprobar `ADO_PAT` en *Mcp Approved Env Vars*). Los JSON están en `snippets/ado-local-pat.kiro.json` y `snippets/ado-local-pat.claude.json`.

---

### Fase C — Comparación y reflexión

**Meta:** consolidar la diferencia entre ambos tipos con evidencia propia.

1. Pide al agente que redacte la comparación:

   ```prompt
   Con base en .cursor/mcp.json, tu configuración de usuario de MCP (~/.cursor/mcp.json) y lo que
   hicimos en este laboratorio, crea evidencia/comparacion.md con una tabla que compare
   Playwright y Azure DevOps en: dónde corre, transporte, autenticación, quién fija la
   versión, qué datos salen de mi máquina y cómo restringimos las tools.
   ```

2. Responde en el mismo archivo:
   - ¿Qué pasaría si el proveedor del MCP remoto cambia o agrega tools mañana? ¿Y con el local fijado en `@0.0.83`?
   - ¿Qué servidor podría filtrar código o datos del negocio fuera de tu red? ¿Qué control lo mitiga?
   - ¿Por qué `X-MCP-Readonly` es más confiable que pedirle al agente “no modifiques nada”?

3. Revisa `git status`: solo deberían aparecer cambios de configuración intencionales. Ni `evidencia/` ni tu `~/.cursor/mcp.json` deben quedar en el repositorio. El Client ID no va en `.cursor/mcp.json` del proyecto.

---

## Conclusiones del laboratorio

- **Local vs remoto es una cuestión de transporte y ubicación**, no del servicio: un MCP local (`command`) corre como proceso en tu máquina; uno remoto (`url` + `type: "http"`) es un servicio de terceros al que llegas por HTTPS.
- **Los MCP remotos trasladan la complejidad a la autenticación**: sin instalación ni versiones que mantener, pero con OAuth, Client IDs y dependencia del proveedor de identidad (Entra no soporta DCR, por eso Cursor, Claude Code y Kiro necesitan un App Registration). Si la organización no tiene la aplicación Azure DevOps MCP, el camino es el servidor local con PAT: el secreto queda en `ADO_PAT` y el JSON solo escribe `${env:ADO_PAT}`.
- **La configuración es portable entre clientes**: Cursor, Kiro y Claude Code comparten el formato `mcpServers`; cambian la ruta del archivo, la forma de declarar el tipo (`type`) y el campo del Client ID (`auth.CLIENT_ID` en Cursor).
- **El mínimo privilegio se aplica en el servidor y en el cliente**: toolsets y solo lectura (servidor), allowlist y toggles por tool o por servidor (Cursor) y el alcance proyecto vs usuario según quién debe compartir la configuración.

Tras el taller, revisa los MCP que usa tu equipo y clasifícalos en locales y remotos: para cada remoto, documenta qué datos envía, cómo se autentica y qué restricciones de tools aplican; para cada local, fija una versión concreta en `args`.

---

## Referencias

- [Cursor — Model Context Protocol](https://cursor.com/docs/context/mcp)
- [Kiro — MCP configuration](https://kiro.dev/docs/mcp/configuration/)
- [Claude Code — Connect to tools via MCP](https://code.claude.com/docs/en/mcp)
- [Playwright MCP (microsoft/playwright-mcp)](https://github.com/microsoft/playwright-mcp)
- [Set up the remote Azure DevOps MCP Server — Microsoft Learn](https://learn.microsoft.com/azure/devops/mcp-server/remote-mcp-server)
- [Azure DevOps Remote MCP Server GA — DevBlogs](https://devblogs.microsoft.com/devops/azure-devops-remote-mcp-server-ga/)
- [Azure DevOps MCP Server local (microsoft/azure-devops-mcp)](https://github.com/microsoft/azure-devops-mcp)
- [Azure DevOps MCP local — Personal Access Token](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/GETTINGSTARTED.md#personal-access-token)

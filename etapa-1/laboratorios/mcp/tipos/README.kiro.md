# Laboratorio 4C: Tipos de MCP — locales y remotos (Kiro, Cursor y Claude Code)

> Esta es la **ruta Kiro**. El mismo laboratorio con el cliente como ruta principal: [Cursor](./README.cursor.md) · [Claude Code](./README.claude.md).

## Objetivo

Distinguir en la práctica los dos tipos de servidor MCP — **local (stdio)** y **remoto (HTTP + OAuth)** — instalando uno de cada tipo en **Kiro**: el MCP de **Playwright** como ejemplo local y el MCP remoto de **Azure DevOps** como ejemplo remoto. Cada paso incluye su equivalente en **Cursor** y **Claude Code**, para que la configuración sea portable entre clientes.

Al final del laboratorio podrás:

1. Explicar qué cambia entre un MCP local y uno remoto: dónde corre el proceso, cómo se autentica y qué datos cruzan la frontera de tu máquina.
2. Configurar un MCP local y uno remoto en Kiro (`.kiro/settings/mcp.json`), y traducir esa configuración a `.cursor/mcp.json` (Cursor) y `.mcp.json` (Claude Code).
3. Aplicar mínimo privilegio en un MCP remoto: limitar toolsets, forzar solo lectura y controlar qué tools se aprueban automáticamente.

**Prerrequisitos:**

- [Laboratorio 4: MCP (fundamentos)](../fundamentos/README.md) — qué es MCP y cómo se configura un primer servidor.
- Opcional: [Laboratorio 6: Compatibilidad de configuración entre agentes](../../config/README.md) — equivalencias de archivos entre clientes.
- **Kiro IDE** instalado (ruta principal). Opcional: **Cursor** y/o **Claude Code** para las equivalencias.
- **Node.js** v20 o superior y **npm**.
- Para la Fase B remota: una **organización de Azure DevOps conectada a Microsoft Entra ID** (las organizaciones con cuenta personal MSA no son compatibles) y el **Client ID** de un *App Registration* que el instructor comparte (ver [Preparación del instructor](#preparación-del-instructor-fase-b)).
- Si la organización **no** tiene la aplicación **Azure DevOps MCP**, la Fase B se hace con la [alternativa con PAT](#alternativa-con-pat--mcp-local): un token de solo lectura en la variable de usuario `ADO_PAT`. No hace falta Client ID.

**Material técnico del laboratorio:** [`.kiro/settings/mcp.json`](./.kiro/settings/mcp.json) (Kiro), [`.cursor/mcp.json`](./.cursor/mcp.json) (Cursor), [`.mcp.json`](./.mcp.json) (Claude Code), [`snippets/`](./snippets/) (configuraciones de Azure DevOps por cliente) y [`evidencia/`](./evidencia/README.md) (salidas del ejercicio).

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
LOCAL   Agente ──tool call──► IDE ──stdin/stdout──► proceso npx (tu PC) ──► navegador
REMOTO  Agente ──tool call──► IDE ──HTTPS + token──► mcp.dev.azure.com ──► tu organización
```

En ambos casos el modelo **no ejecuta nada**: pide una tool, el IDE la ejecuta contra el servidor y el resultado vuelve al contexto (ver [Laboratorio extra: Agent Loop](../../agent-loop/README.md)).

### OAuth en MCP remotos: por qué a veces hace falta un *Client ID*

Al conectarse a un MCP remoto protegido, el cliente necesita un **Client ID** para iniciar el flujo OAuth. Hay dos formas de obtenerlo:

| Mecanismo | Cómo funciona | Ejemplo |
|-----------|---------------|---------|
| **Dynamic Client Registration (DCR)** | El cliente se registra solo contra el servidor; tú no configuras nada | La mayoría de MCP remotos |
| **Client ID pre-registrado** | Un administrador crea un *App Registration* y tú pegas su Client ID en la configuración | **Azure DevOps** (Microsoft Entra no soporta DCR) |

Por eso el MCP de Azure DevOps funciona “sin configuración” en VS Code y Visual Studio (Microsoft ya registró esos clientes), mientras que **Cursor, Claude Code y Kiro** necesitan un App Registration propio en Entra. El protocolo es el mismo; lo que cambia es quién tiene un Client ID reconocido por el proveedor de identidad.

> Kiro no aparece todavía en la lista de clientes documentados por Microsoft. Este laboratorio aplica a Kiro el mismo patrón que Microsoft documenta para Cursor y Claude Code, usando el campo `oauth.clientId` de Kiro. Si en tu tenant no funciona el remoto, usa el [Plan B](#plan-b--mcp-local-de-azure-devops) o, si la organización no tiene la aplicación Azure DevOps MCP, la [alternativa con PAT](#alternativa-con-pat--mcp-local).

### Equivalencias entre clientes

| Concepto | Kiro | Cursor | Claude Code |
|----------|------|--------|-------------|
| Config de **proyecto** | `.kiro/settings/mcp.json` | `.cursor/mcp.json` | `.mcp.json` (raíz) |
| Config de **usuario** | `~/.kiro/settings/mcp.json` | `~/.cursor/mcp.json` | `~/.claude.json` (`claude mcp add --scope user`) |
| Precedencia | Proyecto > usuario | Proyecto > usuario | local > proyecto > usuario |
| Server local | `command`, `args`, `env` | `command`, `args`, `env` | `type: "stdio"`, `command`, `args`, `env` |
| Server remoto | `url`, `headers` (sin `type`) | `url`, `type: "http"`, `headers` | `type: "http"`, `url`, `headers` |
| Client ID OAuth | `oauth.clientId` + `oauth.redirectUri` | `auth.CLIENT_ID` | `oauth.clientId` + `oauth.callbackPort` |
| Desactivar server | `"disabled": true` | Toggle en *Settings → Tools & MCP* | `/mcp` → disable |
| Aprobar tools sin preguntar | `autoApprove: ["tool"]` | Allowlist en ajustes del agente | `permissions.allow` en `.claude/settings.json` (`mcp__server__tool`) |
| Ocultar tools | `disabledTools: ["tool"]` | Toggle por tool | `permissions.deny` |
| Variables de entorno | `${VAR}` (aprobadas en *Mcp Approved Env Vars*) | `${env:VAR}` | `${VAR}` |
| Ver estado | Panel de Kiro → **MCP Servers** | *Settings → Tools & MCP* | `/mcp` |

Referencias: **[Kiro — MCP configuration](https://kiro.dev/docs/mcp/configuration/)**, **[Cursor — MCP](https://cursor.com/docs/context/mcp)**, **[Claude Code — MCP](https://code.claude.com/docs/en/mcp)**.

---

## Componentes del laboratorio

Diagrama de componentes del laboratorio:

```mermaid
flowchart LR
    U[Participante] --> K[Agente en Kiro]

    subgraph PC["Tu máquina"]
        K -->|stdio| PW["Playwright MCP<br/>npx @playwright/mcp"]
        PW --> BR[Navegador Chromium]
        K --> EV["evidencia/"]
    end

    subgraph NUBE["Nube de Microsoft"]
        ADO["Azure DevOps MCP<br/>mcp.dev.azure.com"] --> ORG[(Tu organización<br/>work items · repos)]
        ENTRA[Microsoft Entra ID]
    end

    K -->|"HTTPS + token OAuth"| ADO
    K -.->|"login en navegador<br/>(Client ID del App Registration)"| ENTRA
    BR -->|"internet"| DEMO["demo.playwright.dev/todomvc"]
```

Estructura de archivos:

```
tipos/
├── README.kiro.md                     # Este archivo (ruta Kiro)
├── README.cursor.md                   # Misma práctica, ruta Cursor
├── README.claude.md                   # Misma práctica, ruta Claude Code
├── .kiro/settings/mcp.json            # Kiro: Playwright (local)
├── .cursor/mcp.json                   # Cursor: Playwright (local)
├── .mcp.json                          # Claude Code: Playwright (local)
├── snippets/
│   ├── ado-remoto.kiro.json           # Azure DevOps remoto para Kiro
│   ├── ado-remoto.cursor.json         # Azure DevOps remoto para Cursor
│   ├── ado-remoto.claude.json         # Azure DevOps remoto para Claude Code
│   ├── ado-local.plan-b.kiro.json     # Plan B: Azure DevOps local (stdio)
│   ├── ado-local.plan-b.cursor.json   # Plan B para Cursor
│   ├── ado-local.plan-b.claude.json   # Plan B para Claude Code
│   ├── ado-local-pat.kiro.json        # Alternativa: Azure DevOps local con PAT
│   ├── ado-local-pat.cursor.json      # PAT para Cursor
│   └── ado-local-pat.claude.json      # PAT para Claude Code
└── evidencia/                         # Salidas (gitignored salvo README)
```

---

## Pasos

### Preparación

1. Abre la carpeta `etapa-1/laboratorios/mcp/tipos` como **workspace** en Kiro (`File → Open Folder`).
2. Comprueba Node y npm:

   ```powershell
   node -v   # v20 o superior
   npm -v
   ```

3. En Kiro, abre **Settings**, busca `MCP` y confirma que el soporte MCP está **habilitado**.
4. Abre el panel de Kiro (icono de Kiro en la barra lateral) y ubica la sección **MCP Servers**. Ahí verás el estado de cada servidor durante el laboratorio.

#### Preparación del instructor (Fase B)

El MCP remoto de Azure DevOps exige un *App Registration* en Microsoft Entra. Lo crea **una sola vez el instructor** (o un administrador del tenant) y comparte el **Client ID** con el grupo:

1. Verifica que la aplicación empresarial **Azure DevOps MCP** esté aprovisionada en el tenant.
2. En **Microsoft Entra admin center → App registrations → New registration**, crea `taller-sdd-mcp`.
3. En **Authentication → Add redirect URI → Mobile and desktop applications**, agrega las tres URIs (una por cliente):

   | Cliente | Redirect URI |
   |---------|--------------|
   | Kiro | `http://localhost:3119/oauth/callback` |
   | Cursor | `http://localhost:8787/callback` |
   | Claude Code | `http://localhost:3118/callback` |

4. En la pestaña **Settings** de Authentication, activa **Allow public client flows** (Kiro IDE solo admite clientes públicos con PKCE, sin secreto).
5. En **API permissions → Add a permission → APIs my organization uses**, busca **Azure DevOps MCP** (`2a72489c-aab2-4b65-b93a-a91edccf33b8`) y agrega solo los permisos delegados de **lectura** que usará el taller.
6. Selecciona **Grant admin consent** y copia el **Application (client) ID**.

> El Client ID **no es un secreto**, pero sí es específico del tenant: no lo publiques en repositorios abiertos. Nunca uses *client secrets* en este laboratorio.

---

### Fase A — MCP local: Playwright

**Meta:** levantar un servidor MCP que corre como proceso en tu máquina y verificar que el agente controla un navegador local.

1. Revisa la configuración del proyecto en [`.kiro/settings/mcp.json`](./.kiro/settings/mcp.json):

   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": ["-y", "@playwright/mcp@0.0.83", "--isolated", "--viewport-size=1280x720"],
         "disabled": false,
         "autoApprove": ["browser_snapshot"]
       }
     }
   }
   ```

   | Campo | Qué hace |
   |-------|----------|
   | `command` / `args` | Kiro lanza `npx`, que descarga y ejecuta **una versión fija** del servidor |
   | `--isolated` | Perfil de navegador temporal: no usa tus cookies ni sesiones |
   | `autoApprove` | `browser_snapshot` (solo lectura) no pide confirmación; el resto sí |

2. Kiro detecta el archivo al abrir el workspace. Si no, abre la paleta (`Ctrl+Shift+P`) → **Kiro: Open workspace MCP config (JSON)** y guarda el archivo para forzar la reconexión.
3. En el panel **MCP Servers**, confirma que `playwright` aparece **conectado** y despliega su lista de tools (`browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_take_screenshot`…).

   > La primera vez `npx` descarga el paquete y el navegador puede tardar en instalarse. Si el servidor falla, revisa el canal de logs de MCP de Kiro en el panel *Output* (`Ctrl+Shift+U`).

4. Comprueba que es un proceso **local** mientras el servidor está activo:

   ```powershell
   Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
     Where-Object CommandLine -match 'playwright/mcp' |
     Select-Object ProcessId, CommandLine
   ```

5. En el chat de Kiro (modo **Vibe**), ejecuta:

   ```prompt
   Usa el MCP de Playwright para:
   1. Abrir https://demo.playwright.dev/todomvc
   2. Agregar las tareas "Configurar MCP local" y "Configurar MCP remoto"
   3. Marcar como completada la primera
   4. Tomar una captura y guardarla en evidencia/playwright-todomvc.png
   5. Escribir en evidencia/playwright-resumen.md qué tools usaste y en qué orden
   ```

6. Observa las solicitudes de aprobación: `browser_snapshot` se ejecuta sin preguntar (está en `autoApprove`); `browser_click` y `browser_type` piden confirmación.

#### Equivalencia en Cursor y Claude Code

| Cliente | Cómo instalarlo | Cómo verificarlo |
|---------|-----------------|------------------|
| **Cursor** | Ya incluido en [`.cursor/mcp.json`](./.cursor/mcp.json); abre la carpeta en Cursor | *Settings → Tools & MCP* → `playwright` en verde |
| **Claude Code** | Ya incluido en [`.mcp.json`](./.mcp.json); o bien: `claude mcp add playwright --scope project -- npx -y @playwright/mcp@0.0.83 --isolated` | Ejecuta `claude`, acepta el servidor del proyecto y usa `/mcp` |

> Fíjate en que los tres archivos son casi idénticos: un MCP local es solo “qué comando ejecutar”. Claude Code agrega `"type": "stdio"` de forma explícita; Kiro y Cursor lo infieren por la presencia de `command`.

---

### Fase B — MCP remoto: Azure DevOps

**Meta:** conectar un servidor que **no corre en tu máquina**, autenticarte con OAuth y restringir lo que el agente puede hacer.

> Si tu organización no tiene la aplicación **Azure DevOps MCP**, sáltate esta fase remota y sigue la [alternativa con PAT](#alternativa-con-pat--mcp-local).

1. Abre la configuración **de usuario** de Kiro: paleta → **Kiro: Open user MCP config (JSON)** (`~/.kiro/settings/mcp.json`).

   > Usamos el nivel de usuario porque la organización y el Client ID son **personales o del tenant**, no del repositorio. Playwright, en cambio, vive en el proyecto porque todo el equipo lo usa igual.

2. Copia el contenido de [`snippets/ado-remoto.kiro.json`](./snippets/ado-remoto.kiro.json) y reemplaza `{organization}` y `{client-id}`:

   ```json
   {
     "mcpServers": {
       "azure-devops": {
         "url": "https://mcp.dev.azure.com/{organization}",
         "headers": {
           "X-MCP-Toolsets": "wit,repos",
           "X-MCP-Readonly": "true"
         },
         "oauth": {
           "clientId": "{client-id}",
           "redirectUri": "http://localhost:3119/oauth/callback"
         },
         "disabled": false,
         "autoApprove": []
       }
     }
   }
   ```

   | Campo | Qué hace |
   |-------|----------|
   | `url` | Endpoint alojado por Microsoft; no hay `command` porque no se ejecuta nada localmente |
   | `X-MCP-Toolsets` | Expone solo **work items** y **repos** (en lugar de todo el catálogo: pipelines, wiki, test plans…) |
   | `X-MCP-Readonly` | El servidor oculta todas las tools de escritura (crear, actualizar, votar…) |
   | `oauth.clientId` | Client ID del App Registration; Kiro omite DCR y usa este |
   | `oauth.redirectUri` | Puerto fijo; debe coincidir **exactamente** con el registrado en Entra |
   | `autoApprove: []` | Ninguna tool remota se ejecuta sin tu confirmación |

3. Guarda el archivo. Kiro intenta conectar y **abre el navegador** con el login de Microsoft. Inicia sesión con tu cuenta de la organización y acepta el consentimiento.
4. Vuelve a **MCP Servers**: `azure-devops` debe aparecer conectado. Compara su lista de tools con la tabla del [Marco teórico](#dos-tipos-de-servidor-mcp): solo verás tools de lectura (`wit_work_item`, `repo_pull_request`, `search_code`…), ninguna terminada en `_write`.
5. Comprueba que esta vez **no** hay proceso local nuevo (repite el comando del paso A.4: solo aparece Playwright).
6. En el chat de Kiro, ejecuta:

   ```prompt
   Usa el MCP de Azure DevOps para:
   1. Listar los proyectos de mi organización
   2. Mostrar los work items asignados a mí
   3. Listar los pull requests activos del proyecto <proyecto>
   Escribe un resumen en evidencia/ado-resumen.md indicando qué tools usaste.
   ```

7. Prueba el límite de solo lectura:

   ```prompt
   Crea un work item de tipo Task llamado "Prueba MCP" en el proyecto <proyecto>.
   ```

   > El agente debería responder que no tiene una tool para hacerlo. El control no depende del modelo ni de un prompt: el **servidor** no expone la tool. Esa es la diferencia entre una restricción declarativa y una instrucción en `AGENTS.md`.

8. **Opcional:** cambia a `"disabled": true`, guarda y verifica que el servidor desaparece del panel sin perder la configuración.

#### Equivalencia en Cursor y Claude Code

| Cliente | Configuración | Autenticación |
|---------|---------------|---------------|
| **Cursor** | Copia [`snippets/ado-remoto.cursor.json`](./snippets/ado-remoto.cursor.json) en `~/.cursor/mcp.json` (Client ID en `auth.CLIENT_ID`) | *Settings → Tools & MCP* → `azure-devops` → **Authenticate** |
| **Claude Code** | `claude mcp add --transport http azure-devops https://mcp.dev.azure.com/{organization} --client-id {client-id} --callback-port 3118 --header "X-MCP-Readonly: true" --header "X-MCP-Toolsets: wit,repos"` — o el JSON de [`snippets/ado-remoto.claude.json`](./snippets/ado-remoto.claude.json) | Ejecuta `claude` → `/mcp` → selecciona `azure-devops` → login en navegador |

> Los tres clientes envían los mismos `headers` al mismo `url`. Solo cambia **dónde** se declara el Client ID y **qué puerto** usa el callback OAuth, por eso el App Registration tiene una redirect URI por cliente.

#### Plan B — MCP local de Azure DevOps

Si tu organización no está en Entra, o no es posible crear el App Registration, usa el **servidor local** oficial: el mismo catálogo de tools, pero corriendo con `npx` y autenticado con el inicio de sesión interactivo de Microsoft (por defecto).

1. Copia [`snippets/ado-local.plan-b.kiro.json`](./snippets/ado-local.plan-b.kiro.json) a `~/.kiro/settings/mcp.json` y reemplaza `{organization}`.
2. El argumento `-d core work-items repositories` cumple el papel de `X-MCP-Toolsets`: limita los dominios cargados.
3. Repite los prompts del paso B.6.

> Observa que el Plan B convierte el ejemplo “remoto” en uno **local**: el tipo de MCP depende de **dónde corre el servidor**, no de qué servicio consulta. Un MCP local también puede hablar con la nube.

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

   Cierra Kiro por completo y ábrelo de nuevo: el proceso solo hereda variables de usuario que ya existían al arrancar. Comprueba en una terminal nueva, sin imprimir el valor:

   ```powershell
   if ([string]::IsNullOrEmpty([Environment]::GetEnvironmentVariable("ADO_PAT", "User"))) {
     "ADO_PAT no está definida"
   } else {
     "ADO_PAT está definida"
   }
   ```

4. En *Mcp Approved Env Vars* aprueba `ADO_PAT`. Sin esa aprobación Kiro no interpola `${ADO_PAT}` y el servidor arranca sin token.
5. Abre la config de usuario (**Kiro: Open user MCP config (JSON)**) y usa [`snippets/ado-local-pat.kiro.json`](./snippets/ado-local-pat.kiro.json) **en lugar** del bloque remoto `azure-devops`. Reemplaza `{organization}` (el nombre de `https://dev.azure.com/{organization}`):

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
           "PERSONAL_ACCESS_TOKEN": "${ADO_PAT}"
         },
         "disabled": false,
         "autoApprove": []
       }
     }
   }
   ```

   | Campo | Qué hace |
   |-------|----------|
   | `command` / `args` | Kiro lanza el servidor local; no hay `url` |
   | `--authentication pat` | Lee el token de `PERSONAL_ACCESS_TOKEN` en lugar del login interactivo |
   | `${ADO_PAT}` | Kiro interpola la variable de usuario ya aprobada. El JSON no contiene el token |
   | `-d core work-items repositories` | Equivale a `X-MCP-Toolsets`: solo esos dominios |
   | `autoApprove: []` | Ninguna tool de este servidor se ejecuta sin confirmación |

   Cuando conecte, fija en `args` la versión que resolvió npm (`npm view @azure-devops/mcp version`), del mismo modo que Playwright usa `@0.0.83`.

6. En **MCP Servers**, `azure-devops` debe aparecer conectado. Repite el comando del paso A.4 con el filtro `azure-devops/mcp`: tiene que aparecer un proceso `node` local.
7. Repite los prompts del paso B.6.
8. Pide crear un work item, como en el paso B.7. Con el remoto y `X-MCP-Readonly` la tool de escritura no existe. Con un PAT de solo lectura la tool **puede aparecer**, y es la API de Azure DevOps la que rechaza la llamada. El control está en los scopes del token.

> En Cursor la misma variable se escribe `${env:ADO_PAT}`. En Claude Code también es `${ADO_PAT}`, dentro de la config de usuario. Los JSON están en `snippets/ado-local-pat.cursor.json` y `snippets/ado-local-pat.claude.json`.

---

### Fase C — Comparación y reflexión

**Meta:** consolidar la diferencia entre ambos tipos con evidencia propia.

1. Pide al agente que redacte la comparación:

   ```prompt
   Con base en .kiro/settings/mcp.json, tu configuración de usuario de MCP y lo que
   hicimos en este laboratorio, crea evidencia/comparacion.md con una tabla que compare
   Playwright y Azure DevOps en: dónde corre, transporte, autenticación, quién fija la
   versión, qué datos salen de mi máquina y cómo restringimos las tools.
   ```

2. Responde en el mismo archivo:
   - ¿Qué pasaría si el proveedor del MCP remoto cambia o agrega tools mañana? ¿Y con el local fijado en `@0.0.83`?
   - ¿Qué servidor podría filtrar código o datos del negocio fuera de tu red? ¿Qué control lo mitiga?
   - ¿Por qué `X-MCP-Readonly` es más confiable que pedirle al agente “no modifiques nada”?

3. Revisa `git status`: solo deberían aparecer cambios de configuración intencionales. Ni `evidencia/` ni tu configuración de usuario deben quedar en el repositorio.

---

## Conclusiones del laboratorio

- **Local vs remoto es una cuestión de transporte y ubicación**, no del servicio: un MCP local (`command`) corre como proceso en tu máquina; uno remoto (`url`) es un servicio de terceros al que llegas por HTTPS.
- **Los MCP remotos trasladan la complejidad a la autenticación**: sin instalación ni versiones que mantener, pero con OAuth, Client IDs y dependencia del proveedor de identidad (Entra no soporta DCR, por eso Kiro, Cursor y Claude Code necesitan un App Registration). Si la organización no tiene la aplicación Azure DevOps MCP, el camino es el servidor local con PAT: el secreto queda en `ADO_PAT` y el JSON solo escribe `${ADO_PAT}`.
- **La configuración es portable entre clientes**: Kiro, Cursor y Claude Code comparten el formato `mcpServers`; cambian la ruta del archivo, la forma de declarar el tipo (`type`) y el campo del Client ID.
- **El mínimo privilegio se aplica en el servidor y en el cliente**: toolsets y solo lectura (servidor), `autoApprove` / `disabledTools` / `disabled` (cliente) y el alcance proyecto vs usuario según quién debe compartir la configuración.

Tras el taller, revisa los MCP que usa tu equipo y clasifícalos en locales y remotos: para cada remoto, documenta qué datos envía, cómo se autentica y qué restricciones de tools aplican; para cada local, fija una versión concreta en `args`.

---

## Referencias

- [Kiro — MCP configuration](https://kiro.dev/docs/mcp/configuration/)
- [Cursor — Model Context Protocol](https://cursor.com/docs/context/mcp)
- [Claude Code — Connect to tools via MCP](https://code.claude.com/docs/en/mcp)
- [Playwright MCP (microsoft/playwright-mcp)](https://github.com/microsoft/playwright-mcp)
- [Set up the remote Azure DevOps MCP Server — Microsoft Learn](https://learn.microsoft.com/azure/devops/mcp-server/remote-mcp-server)
- [Azure DevOps Remote MCP Server GA — DevBlogs](https://devblogs.microsoft.com/devops/azure-devops-remote-mcp-server-ga/)
- [Azure DevOps MCP Server local (microsoft/azure-devops-mcp)](https://github.com/microsoft/azure-devops-mcp)
- [Azure DevOps MCP local — Personal Access Token](https://github.com/microsoft/azure-devops-mcp/blob/main/docs/GETTINGSTARTED.md#personal-access-token)

# Langfuse (Docker)

Plataforma **open source** de observabilidad para aplicaciones LLM: trazas, tokens de entrada/salida, latencia y costes por trace. En el laboratorio complementa a CCHV cuando quieres centralizar métricas de apps instrumentadas con el SDK de Langfuse (p. ej. scripts Python o servicios propios), no solo el historial del IDE.

Documentación: [Langfuse — Self-hosting (Docker Compose)](https://langfuse.com/self-hosting/deployment/docker-compose) · Repositorio: [langfuse/langfuse](https://github.com/langfuse/langfuse)

---

## Prerrequisitos

- **Docker Desktop** en ejecución (macOS, Windows o Linux).
- **Git** para clonar el repositorio.
- Recursos mínimos recomendados para la stack completa: **4 GB RAM** y **2 CPU** libres (Postgres, ClickHouse, Redis, MinIO, web y worker).

---

## Paso 1 — Clonar el repositorio

Elige una carpeta **fuera** del workspace del taller (Langfuse no debe versionarse dentro de `optimum/`):

### macOS / Linux / Git Bash

```bash
mkdir -p ~/tools && cd ~/tools
git clone --depth 1 https://github.com/langfuse/langfuse.git
cd langfuse
```

### Windows (PowerShell)

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\tools" | Out-Null
Set-Location "$env:USERPROFILE\tools"
git clone --depth 1 https://github.com/langfuse/langfuse.git
Set-Location langfuse
```

---

## Paso 2 — Configurar secretos

El `docker-compose.yml` incluye valores por defecto marcados con `# CHANGEME`. Para un entorno local del taller, crea un archivo `.env` en la raíz del clone con secretos propios (no uses los defaults en producción):

### macOS / Linux / Git Bash

```bash
cat > .env <<'EOF'
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=REEMPLAZA_CON_openssl_rand_base64_32
SALT=REEMPLAZA_CON_valor_aleatorio_largo
ENCRYPTION_KEY=REEMPLAZA_CON_openssl_rand_hex_32
POSTGRES_PASSWORD=REEMPLAZA_CON_password_seguro
CLICKHOUSE_PASSWORD=REEMPLAZA_CON_password_seguro
REDIS_AUTH=REEMPLAZA_CON_password_seguro
MINIO_ROOT_PASSWORD=REEMPLAZA_CON_password_seguro
LANGFUSE_S3_EVENT_UPLOAD_SECRET_ACCESS_KEY=REEMPLAZA_CON_password_seguro
LANGFUSE_S3_MEDIA_UPLOAD_SECRET_ACCESS_KEY=REEMPLAZA_CON_password_seguro
LANGFUSE_S3_BATCH_EXPORT_SECRET_ACCESS_KEY=REEMPLAZA_CON_password_seguro
TELEMETRY_ENABLED=false
EOF
```

Genera valores aleatorios:

```bash
openssl rand -base64 32    # NEXTAUTH_SECRET
openssl rand -hex 32       # ENCRYPTION_KEY
openssl rand -hex 16       # resto de contraseñas
```

### Windows (PowerShell)

```powershell
function New-Secret { -join ((48..57 + 65..90 + 97..122) | Get-Random -Count 32 | ForEach-Object { [char]$_ }) }

@"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=$(New-Secret)
SALT=$(New-Secret)
ENCRYPTION_KEY=$(([BitConverter]::ToString((1..32 | ForEach-Object { Get-Random -Maximum 256 })).Replace('-','').ToLower()))
POSTGRES_PASSWORD=$(New-Secret)
CLICKHOUSE_PASSWORD=$(New-Secret)
REDIS_AUTH=$(New-Secret)
MINIO_ROOT_PASSWORD=$(New-Secret)
LANGFUSE_S3_EVENT_UPLOAD_SECRET_ACCESS_KEY=$(New-Secret)
LANGFUSE_S3_MEDIA_UPLOAD_SECRET_ACCESS_KEY=$(New-Secret)
LANGFUSE_S3_BATCH_EXPORT_SECRET_ACCESS_KEY=$(New-Secret)
TELEMETRY_ENABLED=false
"@ | Set-Content -Path .env -Encoding UTF8
```

> **Seguridad:** no commitees `.env`. La stack expone la UI en el puerto **3000**; el resto de servicios quedan en `127.0.0.1` según el compose upstream.

---

## Paso 3 — Arrancar la stack

Desde la carpeta `langfuse/`:

```bash
docker compose up -d
```

Comprueba que los contenedores están healthy:

```bash
docker compose ps
```

La primera vez puede tardar varios minutos mientras descarga imágenes (ClickHouse, Postgres, MinIO, Redis, `langfuse-web`, `langfuse-worker`).

---

## Paso 4 — Crear cuenta y proyecto

1. Abre **http://localhost:3000** en el navegador.
2. Regístrate con email y contraseña (instancia local; no requiere Langfuse Cloud).
3. Crea una **organización** y un **proyecto** (p. ej. `taller-sdd-optimum`).
4. Ve a **Project Settings → API Keys** y genera un par:
   - `LANGFUSE_PUBLIC_KEY` (pk-lf-…)
   - `LANGFUSE_SECRET_KEY` (sk-lf-…)

Guarda las claves en un gestor local o en un `.env` de tu app de prueba (nunca en el repo del taller).

---

## Paso 5 — Verificación rápida

### Opción A — UI

- En el proyecto, abre **Traces** o **Dashboard**.
- Deberías ver la interfaz vacía lista para recibir eventos.

### Opción B — SDK Python (opcional)

Instala el cliente y envía un trace de prueba:

```bash
pip install langfuse
```

```powershell
$env:LANGFUSE_PUBLIC_KEY = "pk-lf-..."
$env:LANGFUSE_SECRET_KEY = "sk-lf-..."
$env:LANGFUSE_HOST = "http://localhost:3000"
```

```python
from langfuse import get_client

langfuse = get_client()

with langfuse.start_as_current_observation(
    as_type="span",
    name="optimum-lab-smoke-test",
    input={"prompt": "3+5"},
) as span:
    span.update(output={"result": "8"})

langfuse.flush()
```

Vuelve a la UI: debe aparecer un trace con metadatos de entrada/salida.

---

## Uso en el laboratorio de tokens

| Herramienta | Qué observa | Integración con Cursor |
|-------------|-------------|------------------------|
| **Panel Context** | Estimación en tiempo real | Nativa |
| **CCHV** | Historial del IDE / CLI | Archivos locales (`~/.cursor`, `~/.claude`) |
| **Langfuse** | Trazas de apps con SDK | Requiere instrumentar código o un wrapper propio |

Langfuse brilla cuando comparas **runs instrumentados** (mismo prompt, distinto pipeline: PDF vs MD vs Caveman) con métricas unificadas de tokens y coste. Para las fases A–C del taller, el panel Context sigue siendo la referencia inmediata; Langfuse entra en la Fase D si quieres practicar observabilidad tipo producción.

---

## Operaciones habituales

### Ver logs

```bash
docker compose logs -f langfuse-web
```

### Actualizar

```bash
docker compose pull
docker compose up -d
```

### Detener

```bash
docker compose down
```

### Detener y borrar volúmenes

Reinstalación limpia; pierdes datos locales:

```bash
docker compose down -v
```

---

## Verificación final

- `http://localhost:3000` responde y puedes iniciar sesión.
- En **Settings → API Keys** tienes claves activas.
- (Opcional) Un trace de prueba visible en la UI.

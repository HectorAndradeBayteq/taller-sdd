# Caveman

Skill que reduce tokens de **salida** manteniendo código, comandos y errores intactos. Compatible con Cursor, Claude Code, Windsurf, Cline y otros.

Repositorio: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

---

## Instalación global (perfil del usuario)

Detecta agentes instalados y configura cada uno automáticamente.

### macOS / Linux / WSL / Git Bash

```bash
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash
```

### Windows (PowerShell 5.1+)

```powershell
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

Si la política de ejecución bloquea el script:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

### Solo Cursor (alternativa explícita)

```bash
npx skills add JuliusBrussee/caveman -a cursor
```

### Verificación global

1. Reinicia Cursor o abre chat nuevo en Agent.
2. Escribe `/caveman` — debe confirmar modo activo (p. ej. nivel `full`).
3. Opcional: `/caveman-stats` para ver ahorro estimado en la sesión.

---

## Instalación local (solo el repositorio / proyecto)

Para activar Caveman **siempre** en un workspace concreto, sin depender de recordar `/caveman` cada sesión:

```bash
git clone https://github.com/JuliusBrussee/caveman.git
cd caveman
node bin/install.js --with-init --only cursor
```

Esto crea `.cursor/rules/caveman.mdc` (y equivalentes en otros agentes si los indicas) **en el directorio actual**.

### Instalación local mínima (solo regla en este repo del taller)

Desde la raíz de `optimum/` o de un caso:

```bash
mkdir -p .cursor/rules
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/src/rules/caveman-activate.md \
  -o .cursor/rules/caveman.mdc
```

En Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force -Path .cursor\rules | Out-Null
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/JuliusBrussee/caveman/main/src/rules/caveman-activate.md" `
  -OutFile ".cursor\rules\caveman.mdc"
```

---

## Niveles útiles

| Comando | Efecto |
|---------|--------|
| `/caveman lite` | Compresión suave |
| `/caveman full` | Default del taller |
| `/caveman ultra` | Máxima brevedad |
| *"normal mode"* | Desactiva Caveman en la sesión |

---

## Desinstalar

```bash
npx -y github:JuliusBrussee/caveman -- --uninstall
npx skills remove caveman
```

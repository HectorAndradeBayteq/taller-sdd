# Instalación de Speckit (Spec Kit)

[Spec Kit](https://github.com/github/spec-kit) es el toolkit de **Specification-Driven Development (SDD)** que usa este taller. Instala la CLI `specify`, inicializa el proyecto con los comandos `/speckit.*` y permite recorrer el flujo spec → plan → tareas → implementación descrito en el [README](README.md).

## Pre-requisitos

Antes de instalar Speckit, verifica que tengas:

- **Python 3.11+** — [python.org](https://www.python.org/downloads/)
- **uv** — gestor de paquetes Python (pasos más abajo si aún no lo tienes)

## 1. Instalar uv (si no lo tienes)

Speckit se instala con **uv**. Comprueba si ya está disponible:

```bash
uv --version
```

Si el comando responde con una versión, puedes pasar al [paso 2](#2-instalar-la-cli-specify).

Si ves `command not found: uv` o un error equivalente, instala uv según tu sistema operativo.

### macOS y Linux — instalador standalone

La forma más rápida en macOS o Linux es el script oficial:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Al terminar, sigue las instrucciones que imprima el instalador para añadir `uv` al `PATH` y **abre una terminal nueva**.

### Windows — instalador standalone

Ejecuta en **Command Prompt** o **PowerShell**:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Al terminar, **abre una terminal nueva** para que el binario `uv` quede en el `PATH`.

### macOS — Homebrew

Alternativa en macOS con Homebrew:

```bash
brew install uv
```

### Verificar uv

Tras instalar, confirma que funciona:

```bash
uv --version
```

## 2. Instalar la CLI `specify`

Instala **Specify CLI** de forma persistente con uv. Usa una etiqueta de la página de [Releases](https://github.com/github/spec-kit/releases); al momento de redactar esta guía, la última estable es `v0.9.4`:

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.9.4
```

> **Importante:** Los paquetes oficiales y mantenidos de Spec Kit provienen del repositorio [github/spec-kit](https://github.com/github/spec-kit). No uses paquetes homónimos de PyPI que no estén afiliados al proyecto.

Si prefieres otra versión, sustituye `v0.9.4` por el tag que elijas en Releases.

### Verificar la instalación

```bash
specify version
```

Documentación oficial: [Installation Guide](https://github.com/github/spec-kit/blob/main/docs/installation.md) · [Upgrade Guide](https://github.com/github/spec-kit/blob/main/docs/upgrade.md)

## Solución de problemas

| Problema | Qué hacer |
| --- | --- |
| `command not found: uv` | Instala uv en el [paso 1](#1-instalar-uv-si-no-lo-tienes) y abre una terminal nueva. |
| `command not found: specify` | Repite el [paso 2](#2-instalar-la-cli-specify) y verifica que el directorio de herramientas de uv esté en tu `PATH`. |
| Los comandos `/speckit.*` no aparecen en Cursor | Confirma que ejecutaste `specify init` **dentro del proyecto abierto** con `--integration cursor-agent` y reinicia o reabre la ventana de Cursor. |
| Quiero otra versión | Consulta [Releases](https://github.com/github/spec-kit/releases) y reinstala con el tag deseado, o usa `specify self upgrade --tag vX.Y.Z`. |

# Claude Code History Viewer (CCHV)

Visor **offline** de historial de conversaciones y **analítica de tokens** para Claude Code, Cursor, Codex, Gemini CLI y otros asistentes. Útil para comparar sesiones del laboratorio sin depender solo del panel Context.

Repositorio: [jhlee0409/claude-code-history-viewer](https://github.com/jhlee0409/claude-code-history-viewer)

---

## macOS

### Opción A — Homebrew (recomendada)

```bash
brew tap jhlee0409/tap
brew install --cask claude-code-history-viewer
```

Alternativa con ruta completa del cask:

```bash
brew install --cask jhlee0409/tap/claude-code-history-viewer
```

### Opción B — Instalador manual

1. Descarga el `.dmg` desde [Releases](https://github.com/jhlee0409/claude-code-history-viewer/releases/latest).
2. Abre el disco e arrastra **Claude Code History Viewer** a **Applications**.
3. En el primer arranque, indica la carpeta de historial si te lo pide:
   - Claude Code: `~/.claude/projects/`
   - Cursor: `~/.cursor/`

> No mezcles instalación manual y Homebrew. Si migras de `.dmg` a Homebrew, elimina antes `/Applications/Claude Code History Viewer.app`.

### Actualizar / desinstalar

```bash
brew upgrade --cask claude-code-history-viewer
brew uninstall --cask claude-code-history-viewer
```

---

## Windows

### Opción A — Instalador `.exe`

1. Ve a [Releases](https://github.com/jhlee0409/claude-code-history-viewer/releases/latest).
2. Descarga `Claude.Code.History.Viewer_*_x64-setup.exe`.
3. Ejecuta el instalador y acepta los permisos habituales de escritorio.
4. Al abrir la app, apunta al directorio de historial:
   - Claude Code: `%USERPROFILE%\.claude\projects\`
   - Cursor: `%USERPROFILE%\.cursor\`

### Opción B — Portable (`.zip`)

1. Descarga `Claude.Code.History.Viewer_*_x64-portable.zip`.
2. Extrae en una carpeta local (p. ej. `C:\Tools\CCHV\`).
3. Ejecuta el `.exe` dentro de la carpeta extraída.

---

## Verificación

- En la barra lateral aparecen proveedores detectados (Claude Code, Cursor, etc.).
- Abre **Analytics** y confirma que ves sesiones recientes con desglose de tokens.

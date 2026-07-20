# Guía rápida: Claude Code en Cursor

## 1. Requisitos previos

- Cursor instalado (basado en VS Code 1.98+, por lo que la extensión oficial es compatible).
- Una cuenta de Anthropic: cualquier suscripción de pago de Claude (Pro, Max, Team o Enterprise) o una cuenta de Claude Console (facturación por uso de API). No necesitas generar una API key manualmente para la extensión.
- *(Solo para la CLI)* Node.js 18+ si instalas vía npm.

## 2. Instalación

### Opción A — Extensión oficial (recomendada)

1. Abre Cursor y ve al panel de extensiones: `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac).
2. Busca **"Claude Code"** (publicador: Anthropic, ID: `anthropic.claude-code`) y haz clic en **Install**.
3. Verás el ícono de Claude (spark) en la barra lateral izquierda y en la barra de estado.

> **Nota:** A veces la extensión no aparece en la búsqueda del marketplace de Cursor. En ese caso, usa el botón **"Install for Cursor"** de la [documentación oficial](https://code.claude.com/docs/en/vs-code), que abre el URI `cursor:extension/anthropic.claude-code`, o instala el archivo VSIX manualmente según esa misma página.

### Opción B — CLI + integración automática

1. Instala la CLI:

```bash
npm install -g @anthropic-ai/claude-code
```

2. Abre la terminal integrada de Cursor en tu proyecto y ejecuta:

```bash
claude
```

3. Al ejecutarse dentro de Cursor, la extensión de IDE se auto-instala.
4. Si no se conecta automáticamente, dentro de Claude ejecuta `/ide` y selecciona Cursor.

> **Nota (Windows):** si usas WSL, ejecuta Claude Code desde una terminal WSL dentro de Cursor y trabaja con el repositorio dentro del sistema de archivos de WSL para mejor rendimiento.

## 3. Autenticación

1. La primera vez que abras la extensión (o ejecutes `claude` en la terminal), se inicia el flujo de login.
2. Se abrirá tu navegador con un flujo OAuth: inicia sesión con tu cuenta de Claude (suscripción Pro/Max/Team/Enterprise) o con tu cuenta de Claude Console.
3. Autoriza el acceso y vuelve a Cursor: la sesión queda guardada.

### Comandos útiles

| Comando   | Descripción                                      |
|-----------|--------------------------------------------------|
| `/login`  | Cambiar de cuenta o volver a autenticarte        |
| `/logout` | Cerrar sesión                                    |
| `/status` | Ver con qué cuenta/plan estás conectado          |

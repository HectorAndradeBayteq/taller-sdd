# Políticas del sandbox (laboratorio worktrees)

Responde en **español**.

## Alcance por worktree

- En la rama **`feature/saludo`** (carpeta `wt-feature`): trabaja solo en `src/greeter.js` y, si hace falta, en este `README.md` del sandbox. **No** modifiques `src/calculator.js`.
- En la rama **`fix/calculadora`** (carpeta `wt-fix`): trabaja solo en `src/calculator.js`. **No** modifiques `src/greeter.js`.

## Git

- Puedes usar Shell para `git status`, `git diff` y comprobar el resultado con `node`.
- **No** hagas `git commit`, `git push` ni merges salvo que el instructor o el README del laboratorio lo pidan explícitamente.
- **No** edites `.git/`, ni el script `setup.ps1` del laboratorio padre.

## Estilo

- Cambios mínimos y claros.
- Mantén la API pública de cada módulo (`greet`, `add`) salvo que el prompt pida ampliarla.

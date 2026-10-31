# Sandbox — demo de worktrees

Mini proyecto de laboratorio para practicar **git worktrees** con agentes en paralelo.

## Módulos

| Archivo | Rol |
|---------|-----|
| `src/greeter.js` | Saludo incompleto — tarea de la rama `feature/saludo` |
| `src/calculator.js` | Suma con bug intencional — tarea de la rama `fix/calculadora` |

## Cómo probar (Node.js)

```powershell
node src/greeter.js
node src/calculator.js
```

No hace falta un `package.json`: son scripts sueltos.

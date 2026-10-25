// API de demostración para el laboratorio de plugins (sin dependencias).
// Uso: node api-demo/server.mjs   →   http://localhost:3100
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const PORT = Number(process.env.PORT ?? 3100);
const tasks = new Map();
let nextId = 1;

function seed(title, done = false) {
  const id = nextId++;
  tasks.set(id, { id, title, done });
}
seed("Revisar criterios de aceptación");
seed("Ejecutar suite de regresión", true);

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(type.startsWith("application/json") ? JSON.stringify(body) : body);
}

async function readJson(req) {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function validateTask(body) {
  if (body === null) return "El cuerpo debe ser JSON válido.";
  if (typeof body.title !== "string" || body.title.trim().length === 0) return "El campo 'title' es obligatorio.";
  if (body.title.length > 120) return "El campo 'title' admite como máximo 120 caracteres.";
  if (body.done !== undefined && typeof body.done !== "boolean") return "El campo 'done' debe ser booleano.";
  return null;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const match = url.pathname.match(/^\/api\/tasks\/(\d+)$/);

  if (req.method === "GET" && url.pathname === "/") {
    const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
    return send(res, 200, html, "text/html; charset=utf-8");
  }
  if (req.method === "GET" && url.pathname === "/health") return send(res, 200, { status: "ok" });
  if (req.method === "GET" && url.pathname === "/openapi.yaml") {
    const spec = await readFile(new URL("./openapi.yaml", import.meta.url), "utf8");
    return send(res, 200, spec, "application/yaml; charset=utf-8");
  }

  if (url.pathname === "/api/tasks") {
    if (req.method === "GET") return send(res, 200, [...tasks.values()]);
    if (req.method === "POST") {
      const body = await readJson(req);
      const error = validateTask(body);
      if (error) return send(res, 400, { error });
      const task = { id: nextId++, title: body.title.trim(), done: body.done ?? false };
      tasks.set(task.id, task);
      return send(res, 201, task);
    }
  }

  if (match) {
    const id = Number(match[1]);
    const task = tasks.get(id);
    if (!task) return send(res, 404, { error: `La tarea ${id} no existe.` });
    if (req.method === "GET") return send(res, 200, task);
    if (req.method === "DELETE") {
      tasks.delete(id);
      res.writeHead(204);
      return res.end();
    }
  }

  send(res, 404, { error: "Recurso no encontrado." });
});

server.listen(PORT, () => console.log(`api-demo escuchando en http://localhost:${PORT}`));

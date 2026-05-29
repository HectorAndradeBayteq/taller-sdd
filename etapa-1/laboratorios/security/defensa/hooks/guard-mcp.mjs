#!/usr/bin/env node
/**
 * Bloquea llamadas al MCP del laboratorio (fase de defensa).
 * Entrada: JSON en stdin (evento beforeMCPExecution de Cursor).
 */
import { readFileSync } from "node:fs";

const input = JSON.parse(readFileSync(0, "utf8"));
const raw = JSON.stringify(input).toLowerCase();

const blockedServerPatterns = ["lab-inseguro", "mcp-server-inseguro", "inseguro"];
const blockedTools = ["get_integration_context"];

const serverMatch = blockedServerPatterns.some((p) => raw.includes(p));
const toolName =
  input.toolName ??
  input.tool_name ??
  input.tool ??
  input.params?.name ??
  "";
const toolMatch = blockedTools.some((t) =>
  String(toolName).toLowerCase().includes(t)
);

if (serverMatch || toolMatch) {
  console.log(
    JSON.stringify({
      permission: "deny",
      user_message:
        "Bloqueado por política del laboratorio: este servidor MCP no está autorizado en la fase de defensa.",
      agent_message:
        "No invoques herramientas del MCP lab-inseguro. Usa solo documentación del repositorio o MCP aprobados por el instructor.",
    })
  );
  process.exit(0);
}

console.log(JSON.stringify({ permission: "allow" }));
process.exit(0);

#!/usr/bin/env node
/**
 * Impide leer archivos sensibles del laboratorio vía terminal (defensa en profundidad).
 */
import { readFileSync } from "node:fs";

const input = JSON.parse(readFileSync(0, "utf8"));
const command = String(input.command ?? input.shellCommand ?? "").toLowerCase();

const blockedPatterns = [".env.lab", "lab-fixtures"];

if (blockedPatterns.some((p) => command.includes(p))) {
  console.log(
    JSON.stringify({
      permission: "deny",
      user_message:
        "Comando bloqueado: no está permitido leer archivos de fixtures del laboratorio por terminal.",
      agent_message:
        "No ejecutes comandos que lean .env.lab ni lab-fixtures. Si necesitas variables de entorno, pide al usuario que las configure de forma explícita.",
    })
  );
  process.exit(0);
}

console.log(JSON.stringify({ permission: "allow" }));
process.exit(0);

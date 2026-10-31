/**
 * Saludo incompleto a propósito: la feature debe completar el mensaje.
 * Ejecutar: node src/greeter.js
 */

function greet(name) {
  // TODO(feature): devolver un saludo completo en español, p. ej. "Hola, Ana"
  return name;
}

const who = process.argv[2] || "mundo";
console.log(greet(who));

module.exports = { greet };

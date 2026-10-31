/**
 * Calculadora con bug intencional en la suma.
 * Ejecutar: node src/calculator.js
 */

function add(a, b) {
  // BUG: resta en lugar de sumar
  return a - b;
}

const x = Number(process.argv[2] ?? 2);
const y = Number(process.argv[3] ?? 3);
console.log(add(x, y));

module.exports = { add };

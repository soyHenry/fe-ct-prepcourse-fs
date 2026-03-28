function esParYDivisiblePorTres(a) {
  // La funcion recibe un numero "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Tu codigo:
  return a % 2 === 0 && a % 3 === 0;
}

module.exports = esParYDivisiblePorTres;

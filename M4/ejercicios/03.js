// esParYDivisiblePorTres: Crea una función que reciba un número y determine si es par y divisible por tres. Debería devolver true si se cumplen ambas condiciones, false si no.

function esParYDivisiblePorTres(a) {
  return a % 2 === 0 && a % 3 === 0;
}

module.exports = esParYDivisiblePorTres;

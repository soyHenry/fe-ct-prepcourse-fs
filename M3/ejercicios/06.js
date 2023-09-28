// esNumeroPrimo: Crea una función que determine si un número es primo y devuelva true si lo es, false si no.

function esNumeroPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = esNumeroPrimo;

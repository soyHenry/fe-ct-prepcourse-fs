function esNumeroPrimo(numero) {
  // La funcion recibe un argumento "numero".
  // Determina si este corresponde a un numero primo.
  // Tu codigo:
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i += 1) {
    if (numero % i === 0) return false;
  }
  return true;
}

module.exports = esNumeroPrimo;

function tieneTresDigitos(num) {
  // Si el numero recibido tiene tres digitos, retorna true.
  // Caso contrario, retorna false.
  // Tu codigo:
  return Math.abs(num) >= 100 && Math.abs(num) <= 999;
}

module.exports = tieneTresDigitos;

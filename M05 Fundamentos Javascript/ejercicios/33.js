function esNumeroPrimo(numero) {
  // Si el número es menor o igual a 1, no es primo
  if (numero <= 1) {
    return false;
  }
  
  // Iteramos desde 2 hasta la raíz cuadrada del número para verificar si tiene algún divisor
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si el número es divisible por i, entonces no es primo
    if (numero % i === 0) {
      return false;
    }
  }
  
  // Si no se encontraron divisores, entonces es primo
  return true;
}

module.exports = esNumeroPrimo;
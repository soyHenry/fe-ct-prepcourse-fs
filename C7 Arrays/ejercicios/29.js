function encontrarNumeroFaltante(numeros) {
  // La funcion recibe un argumento "numeros" correspondiente a un array de numeros.
  // Encuentra el numero faltante en una secuencia de numeros enteros consecutivos y retornalo.
  // Tu codigo:
  if (numeros.length === 0) return null;

  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] !== numeros[i - 1] + 1) return numeros[i - 1] + 1;
  }

  return null;
}

module.exports = encontrarNumeroFaltante;

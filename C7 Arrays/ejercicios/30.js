function encontrarElementoRepetido(numeros) {
  // La funcion recibe un argumento "numeros" que es un array de numeros.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu codigo:
  const vistos = new Set();
  for (let i = 0; i < numeros.length; i += 1) {
    if (vistos.has(numeros[i])) return numeros[i];
    vistos.add(numeros[i]);
  }
}

module.exports = encontrarElementoRepetido;

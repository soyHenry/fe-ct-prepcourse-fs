function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con mas de 5 caracteres en el array.
  // Tu codigo:
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= 5) return array[i];
  }
}

module.exports = obtenerPrimerStringLargo;

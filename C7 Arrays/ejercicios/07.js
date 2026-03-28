function ordenarArray(array) {
  // Ordena los elementos del arreglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu codigo:
  return array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}

module.exports = ordenarArray;

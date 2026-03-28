function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu codigo:
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] !== array[0]) return false;
  }
  return true;
}

module.exports = todosIguales;

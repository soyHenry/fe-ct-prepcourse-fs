function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  // Si el arreglo está vacío, todos los elementos son iguales (caso trivial)
  if (array.length === 0) {
    return true;
  }

  // Tomamos el primer elemento del arreglo como punto de referencia
  var referencia = array[0];

  // Iteramos sobre los elementos restantes del arreglo
  for (var i = 1; i < array.length; i++) {
    // Comparamos cada elemento con el primero
    if (array[i] !== referencia) {
      return false; // Si encontramos un elemento diferente, retornamos false
    }
  }

  // Si recorremos todo el arreglo y no encontramos discrepancias, retornamos true
  return true;
}


module.exports = todosIguales;

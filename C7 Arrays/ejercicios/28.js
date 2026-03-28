function esArrayNoVacio(arr) {
  // La funcion recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Tu codigo:
  return Array.isArray(arr) && arr.length > 0;
}

module.exports = esArrayNoVacio;

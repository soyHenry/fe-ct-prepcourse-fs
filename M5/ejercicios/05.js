// obtenerPrimerStringLargo: Crea una función que encuentre y devuelva el primer string con más de 5 caracteres en un array.

function obtenerPrimerStringLargo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i];
    }
  }
}

module.exports = obtenerPrimerStringLargo;

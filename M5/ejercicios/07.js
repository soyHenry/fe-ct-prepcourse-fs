// convertirStringAMayusculas: Crea una función que convierta a mayúsculas todos los strings de un array.

function convertirStringAMayusculas(array) {
  let mayusculas = [];
  for (let i = 0; i < array.length; i++) {
    mayusculas.push(array[i].toUpperCase());
  }
  return mayusculas;
}

module.exports = convertirStringAMayusculas;

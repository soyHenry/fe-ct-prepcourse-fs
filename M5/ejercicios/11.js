// multiplicarElementosPorIndice: Crea una función que multiplique cada elemento de un array por su índice y devuelva el nuevo array.

function multiplicarElementosPorIndice(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] * i);
  }
  return resultado;
}

module.exports = multiplicarElementosPorIndice;

// encontrarIndiceMayor: Crea una función que encuentre y devuelva el índice del número más grande en un array de números.

function encontrarIndiceMayor(array) {
  let mayor = 0;
  let indice = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
      indice = i;
    }
  }
  return indice;
}

module.exports = encontrarIndiceMayor;

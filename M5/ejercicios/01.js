// invertirArray: Crea una función que invierta el orden de los elementos en un array.

function invertirArray(array) {
  let arrayInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

module.exports = invertirArray;

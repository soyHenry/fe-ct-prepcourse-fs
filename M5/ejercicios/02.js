// ordenarArray: Crea una función que ordene los elementos de un array de menor a mayor.

function ordenarArray(array) {
  let arrayOrdenado = [];
  for (let i = 0; i < array.length; i++) {
    let elemento = array[i];
    let j = 0;
    while (j < arrayOrdenado.length && elemento > arrayOrdenado[j]) {
      j++;
    }
    arrayOrdenado.splice(j, 0, elemento);
  }
  return arrayOrdenado;
}

module.exports = ordenarArray;

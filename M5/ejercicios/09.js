// contarElementosMayoresA10: Crea una función que cuente y devuelva la cantidad de elementos mayores a 10 en un array de números.

function contarElementosMayoresA10(array) {
  let mayores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) mayores.push(array[i]);
  }
  return mayores.length;
}

module.exports = contarElementosMayoresA10;

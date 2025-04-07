
arraynumeros = [123,123,32,4,5,6,7,88,6,2,4,1,87,101,10,10,10,10]
// console.log (arraynumeros);
// console.log (arraynumeros.length);
function contarElementosMayoresA10(array) {

  return array.filter (function (cb){
    return cb>10;
  })
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
}

module.exports = contarElementosMayoresA10;
nuevoarray = contarElementosMayoresA10(arraynumeros);
console.log (nuevoarray, nuevoarray.length);
console.log (contarElementosMayoresA10(arraynumeros), arraynumeros.length);
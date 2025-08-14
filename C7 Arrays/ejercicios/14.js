function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayores = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] > 10){
      mayores.push(array[i])
    }
  }
  return mayores.length;
}

module.exports = contarElementosMayoresA10;

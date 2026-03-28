function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de numeros.
  // Tu codigo:
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) contador += 1;
  }
  return contador;
}

module.exports = contarElementosMayoresA10;

function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu codigo:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function agregarNumeros(arrayOfNums) {
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i += 1) {
    suma += arrayOfNums[i];
  }
  return suma;
}

module.exports = promedioResultadosTest;

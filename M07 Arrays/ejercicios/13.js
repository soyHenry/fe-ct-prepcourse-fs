function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var promedio = 0;

  for (var i = 0; i < resultadosTest.length; i++){
    promedio = promedio + resultadosTest[i];
  }
  var divideYpromedia = promedio / resultadosTest.length;
  return divideYpromedia;
}

module.exports = promedioResultadosTest;

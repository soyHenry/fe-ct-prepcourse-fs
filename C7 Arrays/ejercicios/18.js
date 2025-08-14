function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumaTotal = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    sumaTotal += resultadosTest[i];
  }
  return sumaTotal/resultadosTest.length;
}

module.exports = promedioResultadosTest;

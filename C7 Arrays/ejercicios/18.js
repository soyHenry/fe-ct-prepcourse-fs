let array = [10,10,10,8,8,8,10,8,10,5]
console.log (array.length)
function promedioResultadosTest(resultadosTest) {
  // let promedio = 0;
  // let suma = 0;
  // for (i=0;i<resultadosTest.length;i++){
    // suma +=  resultadosTest[i]
  // }
  // promedio = suma/resultadosTest.length
  // return promedio

suma = resultadosTest.reduce ((pepacumulador, pepvaloractual) => {
return pepacumulador+pepvaloractual
},0);
return suma/resultadosTest.length
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
}

module.exports = promedioResultadosTest;
console.log (promedioResultadosTest(array));

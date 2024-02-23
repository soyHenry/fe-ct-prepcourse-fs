function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var suma = 0;
  for (var i = 0; i < arrayOfNums.length; i++){
    suma = suma + arrayOfNums[i];
  }
  return suma;
}

module.exports = agregarNumeros;

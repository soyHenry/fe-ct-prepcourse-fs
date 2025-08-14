function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumaTotal = 0;
  for(let i = 0; i < arrayOfNums.length; i++){
    sumaTotal += arrayOfNums[i];
  }
  return sumaTotal;
}

module.exports = agregarNumeros;

function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu codigo:
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i += 1) {
    suma += arrayOfNums[i];
  }
  return suma;
}

module.exports = agregarNumeros;

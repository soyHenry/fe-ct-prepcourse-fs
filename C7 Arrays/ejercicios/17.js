array = [1,2,3,4,5,6,7,3,5,6,"hola"]

function agregarNumeros(arrayOfNums) {

  let suma=0;
  for (var i=0;i<arrayOfNums.length;i++){
      suma += arrayOfNums[i]
  }
  return suma
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
}

module.exports = agregarNumeros;
console.log (agregarNumeros(array));

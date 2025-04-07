
array = [1,2,3,4,5]
function agregarItemAlFinalDelArray(array, elemento) {

array [array.length] = elemento

  // Agregar el elemento al final del array usando array.length
  // array[array.length] = elemento;

  // Retornar el array actualizado
  // return array;

  // array.push (elemento);
  return array;

}


module.exports = agregarItemAlFinalDelArray;
console.log (agregarItemAlFinalDelArray(array, 6))

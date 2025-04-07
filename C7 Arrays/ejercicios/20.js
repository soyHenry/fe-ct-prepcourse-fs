let array = [2,2,1,2,2]

function todosIguales(array) {
ele0 = array[0];

//  return array.every (function(elemento){
  // return ele0 === elemento
// })

return array.every ((ele)=> ele0 === ele)

  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
}

module.exports = todosIguales;
console.log (todosIguales(array));

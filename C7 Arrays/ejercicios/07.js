
let pepearray = [1,2,1,3,4,2,5,6,2,4,7,8,9];
console.log (pepearray, pepearray.length);
function ordenarArray(array) {

array.sort (function(a,b){ return a-b})

  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
return array;
}

module.exports = ordenarArray;
console.log (ordenarArray(pepearray), pepearray.length);
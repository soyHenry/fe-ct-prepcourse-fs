let array = [1,2,3,4,5,4,5,6,7,8,9]

function multiplicarElementosPorIndice(array) {
  let arraymultiplicaporindice = [];
  for (i=0;i<array.length;i++){
  arraymultiplicaporindice.push (array[i]*i)
}
return arraymultiplicaporindice;
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
}

module.exports = multiplicarElementosPorIndice;
console.log (array.length, typeof(array));
console.log (multiplicarElementosPorIndice(array));
console.log (multiplicarElementosPorIndice(array).length, typeof (multiplicarElementosPorIndice(array)));
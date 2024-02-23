function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var indice = 0;

  for (var i = 0; i < array.length; i++){
    if (array[i]>indice){
      array[i]=array[i]*indice;
      indice ++;
    }
  }
  return array;
}

module.exports = multiplicarElementosPorIndice;

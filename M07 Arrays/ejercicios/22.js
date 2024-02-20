function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:

  for (var i = 0; i < array.length; i++){
    if (array[i] === array[0]){
      return array[0];
    }
  }
return array;

}

module.exports = devolverPrimerElemento;

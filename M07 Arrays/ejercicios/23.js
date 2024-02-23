function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

  var ultimoElemento = array[array.length - 1];

  for (var i = 0; i < array.length; i++){
    if (array[i] === array[0]){
      return ultimoElemento;
    }
  }
return array;

}

module.exports = devolverUltimoElemento;

const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  for (var i = 0; i < array.length; i++){
    callback(array[i]);
  }


//   var newArray = array.map(function (elemento){
//     if (callback (elemento) === 0)
//     return "No se encontró el elemento";
//   });
// return newArray;
};

module.exports = buscarElemento;

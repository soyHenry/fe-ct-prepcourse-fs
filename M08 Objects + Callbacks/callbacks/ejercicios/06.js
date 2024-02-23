function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  // var newArray = [];
  // array.forEach(function(item) {
  //   cb(item);
  //   newArray.push(cb(item));
  // });
  // return newArray;

  var newArray = array.map(function (item){
    return cb (item);
  });
  return newArray;
}

module.exports = map;

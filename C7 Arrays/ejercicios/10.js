let array = ["hola","chau","2","24153645"]
function obtenerPrimerStringLargo(array) {

  var string5 = array.find (function (elemento) {
    return (elemento.length > 5);
  });
  return string5;
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
}

module.exports = obtenerPrimerStringLargo;
console.log (obtenerPrimerStringLargo (array));

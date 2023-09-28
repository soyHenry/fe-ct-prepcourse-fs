// obtenerElementoAleatorio: Crea una función que devuelva un elemento aleatorio de un array.
// Para este ejercicio, puedes investigar el método Math.random() de JavaScript.

function obtenerElementoAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = obtenerElementoAleatorio;

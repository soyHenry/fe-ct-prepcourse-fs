function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
<<<<<<< HEAD
  var indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];

=======

  var indiceAleatorio = Math.floor(Math.random() * array.length);
  
  // Devolver el elemento del arreglo en el índice aleatorio
  return array[indiceAleatorio];
  
>>>>>>> 73a5dd1e02fae8c42b4eabb153a1742ae5f8d5e8
}

module.exports = obtenerElementoAleatorio;

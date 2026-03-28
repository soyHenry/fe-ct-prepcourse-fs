function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // Tu codigo:
  if (array.length === 0) return undefined;
  const indice = Math.floor(Math.random() * array.length);
  return array[indice];
}

module.exports = obtenerElementoAleatorio;

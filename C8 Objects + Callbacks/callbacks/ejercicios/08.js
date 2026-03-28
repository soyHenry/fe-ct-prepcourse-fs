const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensaje indicado.
  // Tu codigo:
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) return array[i];
  }
  return 'No se encontró el elemento';
};

module.exports = buscarElemento;

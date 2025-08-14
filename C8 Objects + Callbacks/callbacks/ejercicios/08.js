const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  /*let elementoEncontrado = callback(array);
  if (elementoEncontrado.length === 0 || Object.keys(elementoEncontrado) === 0){
    return "No se encontró el elemento"
  };
  return elementoEncontrado;*/
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])){
      return array[i];
    }
  }
  return "No se encontró el elemento";
};

module.exports = buscarElemento;

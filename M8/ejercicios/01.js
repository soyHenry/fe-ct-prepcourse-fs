// buscarElemento: Crea una función llamada buscarElemento que reciba un array y un callback. La función debe buscar un elemento en el array y devolverlo. Si el elemento no se encuentra, debe devolver un mensaje que indique que no se encontró.
// La función callback será la encargada de evaluar si el elemento fue encontrado

const buscarElemento = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return "No se encontró el elemento";
};

module.exports = buscarElemento;

// actualizarValorPropiedad: Crea una función que reciba un objeto, el nombre de una propiedad y un nuevo valor, y actualice el valor de la propiedad utilizando bracket notation.

function actualizarValorPropiedad(objeto, propiedad, valor) {
  objeto[propiedad] = valor;
  return objeto;
}

module.exports = actualizarValorPropiedad;

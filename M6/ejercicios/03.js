// agregarNuevaPropiedad: Crea una función que reciba un objeto, el nombre de una nueva propiedad y su valor, y añada esa propiedad al objeto utilizando bracket notation.

const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  objeto[propiedad] = valor;
  return objeto;
};

module.exports = agregarNuevaPropiedad;

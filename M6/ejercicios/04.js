// verificarPropiedad: Crea una función que reciba un objeto y el nombre de una propiedad, y determine si el objeto tiene esa propiedad utilizando hasOwnProperty(). Debería devolver true si la tiene, false si no.

function verificarPropiedad(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad);
}

module.exports = verificarPropiedad;

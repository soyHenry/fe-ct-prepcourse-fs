var objeto = {
  prop1: "valor1",
  prop2: "valor2"
}

function eliminarPropiedad(objeto, propiedad) {

  delete objeto[propiedad]
  return objeto
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
}

module.exports = eliminarPropiedad;
console.log (eliminarPropiedad(objeto, "prop1"))
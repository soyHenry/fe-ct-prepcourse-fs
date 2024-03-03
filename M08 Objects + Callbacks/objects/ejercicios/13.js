function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:

  objeto.shift(propiedad);
  return objeto;
  
}

module.exports = eliminarPropiedad;

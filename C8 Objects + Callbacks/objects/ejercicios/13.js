function eliminarPropiedad(objeto, propiedad) {
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu codigo:
  delete objeto[propiedad];
  return objeto;
}

module.exports = eliminarPropiedad;

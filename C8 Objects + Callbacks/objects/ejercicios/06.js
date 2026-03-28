const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // Tu codigo:
  let contador = 0;
  for (const propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) contador += 1;
  }
  return contador;
};

module.exports = contarPropiedades;

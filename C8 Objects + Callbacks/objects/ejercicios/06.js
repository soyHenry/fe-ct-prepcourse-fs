const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  /* let propiedades = Object.keys(objeto);
  return propiedades.length;*/
  // LA Forma en la que lo pide el enunciado;
  let suma = 0;
  for (const key in objeto) {
    suma++
  }
  return suma;
};

module.exports = contarPropiedades;

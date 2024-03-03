const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  console.log(Object.keys(objeto).length);
  return Object.keys(objeto).length;
};

module.exports = contarPropiedades;

contarPropiedades (objeto);

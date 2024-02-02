const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  // return objeto.key(objeto).length;
  var contador = 0
  for ( let propiedad in objeto){
contador ++
  }
  return contador;
};

module.exports = contarPropiedades;

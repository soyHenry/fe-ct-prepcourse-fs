var objeto = {
  prop1: "valor1",
  prop2: "valor2"
}

const contarPropiedades = (objeto) => {
  
  // var a = Object.keys (objeto).length
  let contador = 0
  for (let propiedad in objeto){
    if (objeto.hasOwnProperty (propiedad))
      contador++
  }
  return contador
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
};

module.exports = contarPropiedades;
console.log (contarPropiedades (objeto))
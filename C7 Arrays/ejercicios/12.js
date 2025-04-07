
let array = ["1341343","Qrqd","Qfwrtyh","Qewrgrhteh"]

function convertirStringAMayusculas(array) {

  let arrayuppercase = []
  arrayuppercase = array.map (function (elemento) {
    return elemento.toUpperCase ()
  })

  return arrayuppercase
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
}

module.exports = convertirStringAMayusculas;
console.log (convertirStringAMayusculas(array));

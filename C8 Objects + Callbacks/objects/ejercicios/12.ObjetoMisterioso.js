var objetoMisterioso = {
  numeroMisterioso: 2
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  
  var a = objetoMisterioso.hasOwnProperty ("numeroMisterioso")
  if (a)
  return objetoMisterioso["numeroMisterioso"]*5
  return "Objeto no encontrado"
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
console.log (multiplicarNumeroDesconocidoPorCinco(objetoMisterioso))

var find = ["hola", "chau", "location", "curso", "henry"]

const buscarElemento = function (array, callback, elemento) {

return callback (array, elemento)

} 

function callback (arr, ele) {

  resultado = arr.find ((item) => item === ele)

  if (resultado)
    return resultado 
  return "Elemento no encontrado"
}

console.log (buscarElemento (find, callback, "cualquiercosa"))
  
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

// function callback (arr, ele){
// 
// const resultado = arr.find ((elemento)=> elemento === ele)
// 
// if (resultado) return resultado
// 
// else return "Elemnto no encontrado"
// 
// }
// 
// console.log (buscarElemento (find, callback, "location"))
module.exports = buscarElemento;

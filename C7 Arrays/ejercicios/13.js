array = [1,2,3,356,7,89,123,987,65,34,67,9,987,6]


function filtrarNumerosPares(array) {
  return array.filter (function (elemento){
    return elemento % 2 === 0;
  })

  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
}

module.exports = filtrarNumerosPares;
console.log (filtrarNumerosPares(array));
function obtenerResto(x, y) {
  var resto = x%y;
  return resto;
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
}

module.exports = obtenerResto;
console.log (obtenerResto (5,5));
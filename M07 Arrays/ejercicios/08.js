function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var numeropares = [];

  for (var i = 0; i < array.length; i++ ){
    if (array[i] % 2 === 0){
      numeropares.push(array[i]);
    }    
  }
  return numeropares;
}

module.exports = filtrarNumerosPares;

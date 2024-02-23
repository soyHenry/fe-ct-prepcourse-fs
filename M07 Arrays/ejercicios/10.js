function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceMayor = 0;
  for(var i=0; i<array.length; i++){
    if (array[i]>array[indiceMayor]){  
      indiceMayor = i;
    }
  }
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;

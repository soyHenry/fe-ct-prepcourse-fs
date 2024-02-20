function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  var temporal = undefined;

  for (var i=0 ; i < array.length ; i++){
    if (array[i].length>=5){
      temporal = array[i];
      break;
  }
  }
  return temporal;
}

module.exports = obtenerPrimerStringLargo;

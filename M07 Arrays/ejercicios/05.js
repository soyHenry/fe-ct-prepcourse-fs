function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
<<<<<<< HEAD
  
  var temporal = undefined;

  for (var i=0 ; i < array.length ; i++){
    if (array[i].length>=5){
      temporal = array[i];
      break;
  }
  }
  return temporal;
=======

  console.log(obtenerPrimerStringLargo);

  var temporal = undefined;

  for (var i = 0; i < array.length ; i++ ){
    if (array[i].length >= 5){
      temporal = array[i]
      break;
  }
}
return temporal;
>>>>>>> 73a5dd1e02fae8c42b4eabb153a1742ae5f8d5e8
}

obtenerPrimerStringLargo ["Barranquilla", "Holas", "Ciudad"]

module.exports = obtenerPrimerStringLargo;

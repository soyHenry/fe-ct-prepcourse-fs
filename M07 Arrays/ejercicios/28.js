function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  
  for (var i=0; i<arr.length; i++){
    if (Array.isArray(arr)){
      return true;
    }
  }
  return false;
}

module.exports = esArrayNoVacio;
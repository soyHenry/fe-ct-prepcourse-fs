function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var palabra = array.replace(/ /g, "").toLowerCase();
  var y = array -1;
 
  for (var i = 0 ; i < palabra.length ; i++){
    if (palabra[i] !== palabra[y])return true;
    y--; 

  }

}

module.exports = invertirArray;

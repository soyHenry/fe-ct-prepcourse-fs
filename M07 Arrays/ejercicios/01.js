function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var arrayNuevo = [];
 
  for (var i = array.length -1; i >=0; i--){
    arrayNuevo.push(array[i]);
    }
    return arrayNuevo;
}

module.exports = invertirArray;

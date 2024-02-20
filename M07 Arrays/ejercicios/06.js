function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  for (var i = 0; i < array.length; i++){
    array[i] = array[i]*2; 
    }
    return array;
}

module.exports = duplicarElementos;

function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

<<<<<<< HEAD
  var mult = i * 2;
  for (var i = 0 ; i < array.length ; i++){
    if (mult < array[i].length )
    return mult * array;
  }
=======
  console.log(array);

  for (var i = 0; i < array.length; i++){
    array[i] = array[i]*2; 
    }
    return array;
>>>>>>> 12f2b628a2ac7ced502721e998f7cdb1ddbb1ded
}

module.exports = duplicarElementos;

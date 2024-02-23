function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  var mult = i * 2;
  for (var i = 0 ; i < array.length ; i++){
    if (mult < array[i].length )
    return mult * array;
  }
}

module.exports = duplicarElementos;

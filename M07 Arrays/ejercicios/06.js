function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var nuevoarray = []
  var multiplica = array.map(function(elemento){
    return elemento * 2;
  })
  var nuevoarray = multiplica
  
return (nuevoarray);
}

module.exports = duplicarElementos;

// duplicarElementos([1, 2 , 3, 4 ])

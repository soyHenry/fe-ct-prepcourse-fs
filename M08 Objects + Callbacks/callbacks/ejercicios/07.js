function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var nuevoarray = arrayOfStrings.filter(function(string){
    if (string.starsWith("a")) return string;
  })
  return nuevoarray;
}

module.exports = filter;

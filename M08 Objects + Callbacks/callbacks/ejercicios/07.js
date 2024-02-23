function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  var newArray = arrayOfStrings.filter(function(item){
    if (item[0] === "a") return item; {
    }
  });
  return newArray;
}

module.exports = filter;

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let comienzaA = arrayOfStrings.filter( (palabra) => palabra.at(0) == "a")
   return comienzaA;
}

module.exports = filter;

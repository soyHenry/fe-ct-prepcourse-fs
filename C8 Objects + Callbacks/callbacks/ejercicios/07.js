function filter(arrayOfStrings) {
  // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu codigo:
  const nuevoArray = [];
  for (let i = 0; i < arrayOfStrings.length; i += 1) {
    if (arrayOfStrings[i][0] === 'a') nuevoArray.push(arrayOfStrings[i]);
  }
  return nuevoArray;
}

module.exports = filter;

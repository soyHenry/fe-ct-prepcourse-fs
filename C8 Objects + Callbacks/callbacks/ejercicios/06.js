function map(array, cb) {
  // Itera sobre el arreglo y guarda el resultado del callback en un nuevo arreglo.
  // Tu codigo:
  const nuevoArray = [];
  for (let i = 0; i < array.length; i += 1) {
    nuevoArray.push(cb(array[i]));
  }
  return nuevoArray;
}

module.exports = map;

function encontrarIndiceMayor(array) {
  // Encuentra el indice del numero mas grande en el array de numeros.
  // Devuelve el valor de este indice.
  // Tu codigo:
  if (array.length === 0) return 0;
  let indiceMayor = 0;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > array[indiceMayor]) indiceMayor = i;
  }
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;

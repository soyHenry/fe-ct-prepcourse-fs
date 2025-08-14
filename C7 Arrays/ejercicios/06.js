function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

module.exports = invertirArray;

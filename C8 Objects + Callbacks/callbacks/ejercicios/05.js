function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y ejecuta el callback con cada valor.
  // Tu codigo:
  for (let i = 0; i < array.length; i += 1) {
    cb(array[i]);
  }
}

module.exports = forEach;

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de numeros y un callback.
  // Suma todos los numeros del arreglo y pasa el resultado al callback.
  // Tu codigo:
  let suma = 0;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    suma += arrayOfNumbers[i];
  }
  cb(suma);
}

module.exports = sumarArray;

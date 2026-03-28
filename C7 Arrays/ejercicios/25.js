function contarParesConContinue(numeros) {
  // La funcion recibe un array de numeros por argumento.
  // Devuelve la cantidad de numeros pares que hay en el array.
  // Tu codigo:
  let cantidad = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 2 !== 0) continue;
    cantidad += 1;
  }
  return cantidad;
}

module.exports = contarParesConContinue;

function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los numeros pares presentes en el array.
  // Tu codigo:
  return array.filter((numero) => numero % 2 === 0);
}

module.exports = filtrarNumerosPares;

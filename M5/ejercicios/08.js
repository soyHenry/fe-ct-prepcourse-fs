// filtrarNumerosPares: Crea una función que filtre y devuelva solo los números pares de un array.

function filtrarNumerosPares(array) {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) pares.push(array[i]);
  }
  return pares;
}

module.exports = filtrarNumerosPares;

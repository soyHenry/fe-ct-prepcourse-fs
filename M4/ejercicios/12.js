// encontrarPrimerMultiploDeN: Crea una función que encuentre el primer múltiplo de un número N en una secuencia de números y lo devuelva. Utiliza break para detener el bucle una vez que encuentres el múltiplo.

function encontrarPrimerMultiploDeN(n, secuencia) {
  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      return secuencia[i];
    }
  }
}

module.exports = encontrarPrimerMultiploDeN;

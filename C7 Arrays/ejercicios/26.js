function encontrarPrimerMultiploDeN(n, secuencia) {
  // La funcion recibe un numero "n" y un array de numeros "secuencia" como argumentos.
  // Devuelve el primer multiplo de n que encuentres en la secuencia.
  // Tu codigo:
  for (let i = 0; i < secuencia.length; i += 1) {
    if (secuencia[i] % n === 0) return secuencia[i];
  }
}

module.exports = encontrarPrimerMultiploDeN;

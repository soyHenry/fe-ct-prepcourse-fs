function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (let i = 0; i < secuencia.length; i++) {
    if(secuencia[i] == 1){
      continue;
    }
    if(n % secuencia[i] == 0){
      return secuencia[i];
      break;
    }
  }
}

module.exports = encontrarPrimerMultiploDeN;
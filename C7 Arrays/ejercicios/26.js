
secuencia = [1,2,3,4,5,6,7,8,9,10,22,3,4,5,6,77,6,5,443,33,24]

function encontrarPrimerMultiploDeN(n, secuencia) {

  for (i=0;i<secuencia.length;i++){
    
      if (secuencia[i] % n === 0) break
      if (i===secuencia.length-1) return "No hay multiplo"
    }
  return secuencia[i]
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

}

module.exports = encontrarPrimerMultiploDeN;
console.log (encontrarPrimerMultiploDeN(12, secuencia))
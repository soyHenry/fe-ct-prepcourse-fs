function encontrarPrimerMultiploDeN(n, secuencia) {
  for (var i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      return secuencia[i]; // Devuelve el primer múltiplo encontrado
      break; // Detiene el bucle una vez que se encuentra el múltiplo
    } 
    }
  
  return null; // Devuelve null si no se encuentra ningún múltiplo
}





module.exports = encontrarPrimerMultiploDeN;
function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    let suma = 0
    for (let j = 0; j < numeros.length; j++) {
      if(numeros[i] == numeros[j]){
        suma++;
      }
      if(suma == 2){
        return numeros[i]
      }
    }
  }
}

module.exports = encontrarElementoRepetido;
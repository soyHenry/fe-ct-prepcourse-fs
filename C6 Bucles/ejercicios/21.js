function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let pot = 2
  let i = 0
  while (i<10) {
    if(numero % 2 !== 0) return false;
    if(numero == 2) return true;
    if(numero == 2*pot){
      return true;
    }
    pot = pot * 2
    i++
  }
  return false;
}

module.exports = esPotenciaDeDos;

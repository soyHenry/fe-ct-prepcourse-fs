function esEntero(num) {

  if (Number.isInteger (num))
    return true
  else return false
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
}

module.exports = esEntero;
console.log (esEntero(0.8));

function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var acumulador = 0
  for ( i = 1; i <= n; i++){
    acumulador= acumulador + i;
  }
  return acumulador;
}

module.exports = sumarHastaN;

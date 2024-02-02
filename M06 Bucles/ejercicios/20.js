function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  var contador = 0;
  for (i = 1; i <= n; i++){
    contador = contador + i;
    if (contador >= 100)break;
  }
  return contador;
}

module.exports = sumarHastaNConBreak;
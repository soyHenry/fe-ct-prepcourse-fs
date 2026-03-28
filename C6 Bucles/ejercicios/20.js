function sumarHastaNConBreak(n) {
  // La funcion recibe un numero n por argumento.
  // Devuelve la suma de todos los numeros desde 1 hasta n.
  // Si la suma supera a 100, deten el bucle usando break.
  // Tu codigo:
  let suma = 0;
  for (let i = 1; i <= n; i += 1) {
    suma += i;
    if (suma > 100) break;
  }
  return suma;
}

module.exports = sumarHastaNConBreak;

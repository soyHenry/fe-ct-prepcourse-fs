function sumarHastaN(n) {
  // La funcion recibe un numero "n" por argumento.
  // Devuelve la suma de todos los numeros desde 1 hasta n.
  // Tu codigo:
  let suma = 0;
  for (let i = 1; i <= n; i += 1) {
    suma += i;
  }
  return suma;
}

module.exports = sumarHastaN;

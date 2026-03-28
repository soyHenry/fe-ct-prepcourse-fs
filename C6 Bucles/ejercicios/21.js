function esPotenciaDeDos(numero) {
  // La funcion recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Tu codigo:
  if (numero < 1) return false;
  while (numero > 1) {
    if (numero % 2 !== 0) return false;
    numero /= 2;
  }
  return true;
}

module.exports = esPotenciaDeDos;

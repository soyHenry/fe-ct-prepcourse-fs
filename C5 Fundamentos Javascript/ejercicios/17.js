function esPositivo(num) {
  // La funcion recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el numero es positivo o negativo.
  // Si el numero es 0, devuelve false.
  // Tu codigo:
  if (num > 0) return 'Es positivo';
  if (num < 0) return 'Es negativo';
  return false;
}

module.exports = esPositivo;

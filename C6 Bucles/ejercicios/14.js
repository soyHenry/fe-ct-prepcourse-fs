function operadoresLogicos(num1, num2, num3) {
  // La funcion recibe tres numeros distintos.
  // Tu codigo:
  if (num1 > num2 && num1 > num3 && num1 > 0) return 'Numero 1 es mayor y positivo';
  if (num1 < 0 || num2 < 0 || num3 < 0) return 'Hay negativos';
  if (num3 > num1 && num3 > num2) return num3 + 1;
  if (num1 === 0 && num2 === 0 && num3 === 0) return 'Error';
  return false;
}

module.exports = operadoresLogicos;

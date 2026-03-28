function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un limite de 8 veces.
  // Retorna el valor final.
  // Tu codigo:
  let contador = 0;
  do {
    num += 5;
    contador += 1;
  } while (contador < 8);
  return num;
}

module.exports = doWhile;

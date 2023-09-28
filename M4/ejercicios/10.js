// sumarHastaNConBreak: Crea una función que reciba un número N y devuelva la suma de todos los números desde 1 hasta N, pero si en algún momento la suma supera 100, detén el bucle usando break.

function sumarHastaNConBreak(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
    if (suma > 100) {
      break;
    }
  }
  return suma;
}

module.exports = sumarHastaNConBreak;

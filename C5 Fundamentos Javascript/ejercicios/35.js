// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  return (Math.ceil (num));
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
}

module.exports = redondearHaciaArriba;
console.log (redondearHaciaArriba (3.1));
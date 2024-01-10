// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  if (typeof(num) === "number") {
    return Math.ceil(num);
  }
}

module.exports = redondearHaciaArriba;
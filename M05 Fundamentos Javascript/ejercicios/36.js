// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  if (typeof(num) === "number" && typeof(exponent) === "number") {
    return Math.pow(num , exponent);
  }
}

module.exports = elevar;
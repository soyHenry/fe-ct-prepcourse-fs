// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   if (typeof(num) === "number") {
      return Math.round(num);
   }
}

module.exports = redondearNumero;

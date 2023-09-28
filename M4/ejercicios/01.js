// esIgualYNegativo: Crea una función que reciba dos números y determine si son iguales y ambos negativos. Debería devolver true si se cumple esa condición, false si no.

function esIgualYNegativo(a, b) {
  return a === b && a < 0;
}

module.exports = esIgualYNegativo;

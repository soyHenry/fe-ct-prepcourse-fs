function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num > 99 && num <= 999)return true;
  else return false;
  // if (num.toString().length === 3)return true;
}

module.exports = tieneTresDigitos;

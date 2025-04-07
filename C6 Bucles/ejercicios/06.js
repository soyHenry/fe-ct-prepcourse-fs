function tieneTresDigitos(num) {
  var a = num.toString ();
  if (a.length  === 3)
    return true
  else return false
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
}

module.exports = tieneTresDigitos;
console.log (tieneTresDigitos (4));

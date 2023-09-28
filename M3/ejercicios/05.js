// esFechaValida: Crea una función que compruebe si un argumento es una fecha válida y devuelva true si lo es, false si no.

function esFechaValida(fecha) {
  return fecha instanceof Date && !isNaN(fecha);
}

module.exports = esFechaValida;

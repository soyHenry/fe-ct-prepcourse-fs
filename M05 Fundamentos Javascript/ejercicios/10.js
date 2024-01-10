function esFechaValida(fecha) {
  // Verifica si el valor proporcionado es una fecha válida.
  // Utiliza el objeto Date para comprobar si se puede crear una nueva fecha con ese valor.
  if (Object.prototype.toString.call(fecha) === "[object Date]") {
    // También podrías comprobar si la fecha es válida.
    // Esto evitará casos como 'new Date("invalid")' que retornaría una fecha invalida.
    return !isNaN(fecha.getTime());
  } 
  return false;
}

module.exports = esFechaValida;
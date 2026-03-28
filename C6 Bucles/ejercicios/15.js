function obtenerDiaSemana(numero) {
  // La funcion recibe un "numero" entre 1 y 7 por argumento.
  // Tu codigo:
  switch (numero) {
    case 1:
      return 'Lunes';
    case 2:
      return 'Martes';
    case 3:
      return 'Miercoles';
    case 4:
      return 'Jueves';
    case 5:
      return 'Viernes';
    case 6:
      return 'Sabado';
    case 7:
      return 'Domingo';
    default:
      return 'No es un dia de la semana';
  }
}

module.exports = obtenerDiaSemana;

function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch (true) {
    case numero == 1:
      return "Lunes"
      break;
    case numero == 2:
      return "Martes"
      break;
    case numero == 3:
      return "Miercoles"
      break;
    case numero == 4:
      return "Jueves"
      break;
    case numero == 5:
      return "Viernes"
      break;
    case numero == 6:
      return "Sabado"
      break;
    case numero == 7:
      return "Domingo"
      break;
    default:
      return "No es un dia de la semana"
      break;
  }

}

module.exports = obtenerDiaSemana;
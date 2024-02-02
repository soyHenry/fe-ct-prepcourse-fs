function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  var dia = numero;
  switch(dia){
    case 1:
      return "Lunes";
      break;
      case 2:
      return "Martes";
      break;
      case 3:
      return "Miercoles";
      break;
      case 4:
      return "Jueves";
      break;
      case 5:
      return "Viernes";
      break;
      case 6:
      return "Sabado";
      break;
      case 7:
      return "Domingo";
      break;
      // default:
      //   return "No es un dia de la semana";
  }
  if (numero <=0 || numero > 7 || numero != Number)return "No es un dia de la semana";
}

module.exports = obtenerDiaSemana;
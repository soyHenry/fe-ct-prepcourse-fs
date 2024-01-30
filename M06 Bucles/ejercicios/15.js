function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch (numero){
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miercoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sabado";
    case 7:
      return "Domingo";
    default:
      return "No es un dia de la semana"
    }

}

module.exports = obtenerDiaSemana;
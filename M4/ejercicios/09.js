// obtenerDiaSemana: Crea una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (por ejemplo, 1 para "Lunes", 2 para "Martes", etc.) utilizando un switch.
// Los días de la semana deben ser retornados con la primera letra en mayúscula y sin tilde.
// Si el número no corresponde a un día de la semana, debería devolver el string "No es un dia de la semana".

function obtenerDiaSemana(numero) {
  let dia = "";
  switch (numero) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miercoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sabado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "No es un dia de la semana";
      break;
  }
  return dia;
}

module.exports = obtenerDiaSemana;

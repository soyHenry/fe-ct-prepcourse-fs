function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  switch (true) {
    case color == "blue":
      return "This is blue"
      break;
    case color == "red":
      return "This is red"
      break;
    case color == "green":
      return "This is green"
      break;
    case color == "orange":
      return "This is orange"
      break;
    default:
      return "Color not found"
      break;
  }
}

module.exports = colors;

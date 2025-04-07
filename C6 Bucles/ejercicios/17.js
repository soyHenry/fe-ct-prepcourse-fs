function colors(color) {
  switch (color) {
    case "blue": return "This is "+color;
    case "red": return "This is "+color;
    case "green": return "This is "+color;
    case "orange": return "This is "+color;
    default: return "Color not found";

  }
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
}

module.exports = colors;
console.log  (colors("green"));

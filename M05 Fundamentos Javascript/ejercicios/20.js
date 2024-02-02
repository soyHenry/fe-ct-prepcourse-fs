function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra === "a")return "Es vocal"
  else if (letra === "e") return "Es vocal"
  else if (letra === "i") return "Es vocal"
  else if (letra === "o") return "Es vocal"
  else if (letra === "u") return "Es vocal"
  else if (letra != 1) return "Dato incorrecto"
  else return "Dato incorrecto"
}

module.exports = esVocal;

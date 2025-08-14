function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  switch (true) {
    case letra == "a":
      return "Es vocal"
      break;
    case letra == "e":
      return "Es vocal"
      break;
    case letra == "i":
      return "Es vocal"
      break;
    case letra == "o":
      return "Es vocal"
      break;
    case letra == "u":
      return "Es vocal"
      break;
    default:
      return "Dato incorrecto"
      break;
  }
}

module.exports = esVocal;

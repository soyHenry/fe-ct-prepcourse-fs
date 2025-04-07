
  function esVocal(letra) {
    if (letra.length === 1) {
       letra = letra.toLowerCase();
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return "Es vocal";
      } else {
        return "Dato incorrecto";
      }
    } else {
      return "Dato incorrecto";
    }
  }

  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:


module.exports = esVocal;
console.log (esVocal("AA"));

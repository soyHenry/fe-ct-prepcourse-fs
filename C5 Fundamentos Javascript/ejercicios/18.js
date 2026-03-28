function esVocal(letra) {
  // La funcion recibe un argumento llamado letra el cual es un string.
  // Retorna "Es vocal" si la letra es una vocal.
  // De lo contrario retorna "Dato incorrecto".
  // Tu codigo:
  if (typeof letra !== 'string' || letra.length !== 1) return 'Dato incorrecto';
  return 'aeiou'.includes(letra.toLowerCase()) ? 'Es vocal' : 'Dato incorrecto';
}

module.exports = esVocal;

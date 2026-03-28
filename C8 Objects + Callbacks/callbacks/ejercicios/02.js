function cambiarCadena(string, callback) {
  // Aplica la funcion de callback al string y devuelve el resultado.
  // Si no se recibe una funcion callback entonces se debe retornar el string original.
  // Tu codigo:
  if (typeof callback !== 'function') return string;
  return callback(string);
}

module.exports = cambiarCadena;

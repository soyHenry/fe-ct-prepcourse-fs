// cambiarCadena: Crea una función llamada cambiarCadena que reciba un string y un callback. La función debe aplicar la función de callback al string y devolver el resultado.
// La función callback será la encargada de recibir un string y devolverlo con los cambios.

function cambiarCadena(string, callback) {
  return callback(string);
}

module.exports = cambiarCadena;

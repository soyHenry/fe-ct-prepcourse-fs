// invertirTexto: Crea una función que reciba un string y devuelva el string invertido.

function invertirTexto(texto) {
  return texto.split("").reverse().join("");
}

module.exports = invertirTexto;

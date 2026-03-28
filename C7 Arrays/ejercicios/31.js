function invertirTexto(texto) {
  // La funcion recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu codigo:
  return texto.split('').reverse().join('');
}

module.exports = invertirTexto;

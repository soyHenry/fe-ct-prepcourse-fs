function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let textoSeparado = texto.split("");
  textoSeparado = textoSeparado.reverse();
  textoSeparado = textoSeparado.join("");
  return textoSeparado;

}

module.exports = invertirTexto;

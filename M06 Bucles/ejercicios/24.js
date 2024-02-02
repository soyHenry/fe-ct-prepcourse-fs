function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // console.log (texto)
  return texto.split("").reverse().join("");
  // console.log (texto.split("").reverse().join(""))
}


module.exports = invertirTexto;

// invertirTexto("hola mundo");
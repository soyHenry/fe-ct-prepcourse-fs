var palabra = ["Hola","como estas", "todo bien"]

function dePalabrasAFrase(palabras) {

  var palstr = palabras.join (' ')
  // var pal = palabras.toString ()
  return palstr
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
}

module.exports = dePalabrasAFrase;
console.log (dePalabrasAFrase(palabra))

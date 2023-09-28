// esPalindromo: Crea una función que verifique si un string es un palíndromo y devuelva true si lo es, false si no.
// Un palíndromo es una palabra, frase o número que se lee igual hacia adelante que hacia atrás.

function esPalindromo(string) {
  return (
    string.toLowerCase() === string.toLowerCase().split("").reverse().join("")
  );
}

module.exports = esPalindromo;

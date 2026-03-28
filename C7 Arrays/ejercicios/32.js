function esPalindromo(string) {
  // La funcion recibe un argumento "string".
  // Verifica si este string es palindromo o no.
  // Tu codigo:
  return string === string.split('').reverse().join('');
}

module.exports = esPalindromo;

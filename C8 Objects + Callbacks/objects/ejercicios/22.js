function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
  if (str1.length !== str2.length) return false;

  const ordenar = (str) => str.toLowerCase().split('').sort().join('');

  return ordenar(str1) === ordenar(str2);
}

module.exports = esAnagrama;

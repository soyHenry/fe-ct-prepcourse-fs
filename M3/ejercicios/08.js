// esAnagrama: Crea una función que determine si dos strings son anagramas y devuelva true si lo son, false si no.
// Un anagrama es una palabra que se forma con las mismas letras que otra, pero en orden diferente.

function esAnagrama(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Sorted = str1.split("").sort().join("");
  const str2Sorted = str2.split("").sort().join("");

  return str1Sorted === str2Sorted;
}

module.exports = esAnagrama;

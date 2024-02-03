function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

// console.log(str2);

// var i = str1 - 1;
// var j = str2 + 1;

// var palabra = str1&&str2.replace(/ /g, "").toLowerCase(); 

// for (var i = 0 ; i < palabra.length ; i ++){
//   for (var j = 0 ; j < palabra.length ; j ++){
//     if (palabra[i]===palabra[j]) return true;
  
//   }
// }
// return false;

var palabra1 = str1.toLowerCase().replace(" ","").split("").sort().join("");
var palabra2 = str2.toLowerCase().replace(" ","").split("").sort().join("");

if (palabra1 === palabra2)return true;
else return false;
}


esAnagrama ("Hola mundo", "mundo Hola");
module.exports = esAnagrama;

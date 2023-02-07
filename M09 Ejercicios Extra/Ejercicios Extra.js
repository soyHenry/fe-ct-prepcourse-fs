/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
const obj = {D: 1, B: 2, C: 3}

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   return Object.entries(objeto)
}

console.log(deObjetoAarray(obj));

let string1 = "master eres un crack y bastante bueno"

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const letterCount = {};
   for (const letter of string) {
     letterCount[letter] = letterCount[letter] + 1 || 1;
   }
   return Object.entries(letterCount).sort().reduce((acc, [key, value]) => {
     acc[key] = value;
     return acc;
   }, {});
}

console.log(numberOfCharacters(string1));

let string5 = "La Cosa Mas Rara del Mundo"

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const caracteres = string.split("");
  caracteres.sort((a, b) => {
    if (a === a.toUpperCase() && b === b.toLowerCase()) {
      return -1;
    }
    if (a === a.toLowerCase() && b === b.toUpperCase()) {
      return 1;
    }
    return 0;
  });
  return caracteres.join("");
   
}

console.log(capToFront(string5));

const string7 = "The Henry Challenge is close!"

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const caracteres = frase.split(" ");
   
   const letrasReverse = caracteres.map(letra => letra.split("").reverse().join(""));

   //caracteres.reverse();

   return letrasReverse.join("")
}

console.log(asAmirror(string7));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   if(!Number(numero)){
      console.warn(`No es un numero, ingresa otro dato`)
      return;matc
  } 
  if((numero.toString().split('').reverse().join('')) === numero.toString()){
      console.log(`Si, si es un numero Capicua`);
      return;
  } 
  if ((numero.toString().split('').reverse().join('')) !== numero.toString()){
      console.log(`No, no es un numero capicua`);
  }
}

const string = "el abecedario de las chicas barro"

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let eliminando = string.split("").filter(letra => letra.match(/[^abc]/g));
   let resp = eliminando.join("")
   return resp;
}

console.log(deleteAbc(string));

const arrayNum = ["uno","dos","tres","cuatro","seis","cinco","uno"]

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b) => a.length - b.length)
}

console.log(sortArray(arrayNum));

const primArr = [1,2,3,4,5];
const secArr = [2,3,6,5,8]

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter(number => array2.includes(number))
}

console.log(buscoInterseccion(primArr, secArr));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

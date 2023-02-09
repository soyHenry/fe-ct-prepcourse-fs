/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].

   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }

   const newObject = {};
   for (letter of string) {
      if (Object.hasOwn(newObject, letter)) {
         ++newObject[letter]
      } else {
         newObject[letter] = 1;
      }
   }

   return newObject;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy   

   const upperCaseSubString = string.match(/[A-Z]/g);
   const lowerCaseSubString = string.match(/[a-z]/g);

   return (upperCaseSubString.join("") + lowerCaseSubString.join(""));
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"

   const fraseArray = frase.split(" ");
   const newString = [];

   for (word of fraseArray) {
      const reverseWord = [];
      for (let i = word.length; i >= 0; i--){
         reverseWord.push(word[i]);
      }
      newString.push(reverseWord.join(""));
   }

   return newString.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".

   const stringArray = numero.toString().split("");
   let i = 0;
   let j = (stringArray.length - 1);
   let isCapicua = true;

   while (i < j) {
      if (stringArray[i] !== stringArray[j]) {
         isCapicua = false;
      }
      i++;
      j--;
   }

   if (isCapicua) {
      return ("Es capicua");
   }
   return ("No es capicua");
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   
   const regex = /[a-c]/g;
   let newString = "";
   newString = string.replace(regex, "");
   return newString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   const sortedArray = arrayOfStrings.sort((a, b) => {
      if (a.length < b.length) {
         return -1;
      }

      if (a.length > b.length) {
         return 1;
      }

      return 0;
   });
   return sortedArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  return result = array1.filter((item) => {
      for (number of array2) {
         if (number === item) {
            return number;
         }
      }
   })
}

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

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   const arr = Object.keys(objeto).map(elem => {
      return [elem, objeto[elem]];
   });

   return arr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   const obj = {};
   // Pasar caracteres al array
   const arrSorted = string.toLowerCase().split('');
   // Comparar caracteres contenidos en el array de forma alfabetica
   arrSorted.sort(function (a, b){
      return a.localeCompare(b);
   });
   // Guardar caracteres ordenados en un String
   myStr = arrSorted.join('');
   // Contar cuántas veces aparece un caracter (asignando la cuenta total como valor y dando es caracter como clave).
   for (let i = 0; i < myStr.length; i ++){
      (!obj.hasOwnProperty(myStr.charAt(i)))
      ? obj[myStr.charAt(i)] = 1
      : obj[myStr.charAt(i)] = 1 + obj[myStr.charAt(i)];
   }
   return obj;
   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   const arrStr = [];
   // Agregar mayúsculas al principio
   for(let i = 0; i < string.length; i++){
      if(string.charAt(i) === string.charAt(i).toUpperCase()) arrStr.push(string.charAt(i));
   }
   // Agregar contenido restante
   for(let i = 0; i < string.length; i++){
      if(string.charAt(i) !== string.charAt(i).toUpperCase()) arrStr.push(string.charAt(i));
   }

   return arrStr.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   const arrPhrases = frase.split(' '), arrAccommodated = [];

   // Orden en el cual se presenta el array
   for(let i = 0; i < arrPhrases.length; i ++){

      // Invertir orden de los caracteres que contiene el array
      for(let x = (arrPhrases[i].length - 1); x >= 0; x --){
         arrAccommodated.push(arrPhrases[i].charAt(x));       
      }

      // Separar los elementos con un espacio
      arrAccommodated.push(' ');
   }

   return arrAccommodated.join('');
   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   const number = numero.toString().split('');

   const invNumber = [];

   for(let i = (number.length - 1); i >= 0; i --){
      invNumber.push(number[i]);
   }

   return (numero === parseInt(invNumber.join('')))
   ? 'Es capicua'
   : 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   let arrStr = string.toLowerCase().split('');
   arrStr = arrStr.filter(e => {
      return (e !== 'a' && e !== 'b' && e !== 'c');
   });

   return arrStr.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   const arrOration = arrayOfStrings.sort((a, b) => {
      return a.length - b.length;
   });

   return arrOration;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   const result = [];

   for(let i = 0; i < array1.length; i++){
      for(let x = 0; x < array2.length; x++){
         if(array1[i] === array2[x]){ 
            result.push(array1[i]);
            break;
         }
      }
   }

   return result;

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

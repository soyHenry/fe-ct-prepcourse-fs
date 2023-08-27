/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let arrayOfArrays=[];
   for (let property in objeto){
      arrayOfArrays.push([property,objeto[property]]);
};
return arrayOfArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto={};
   let suma=1;
   let newStrToArray=[];
   newStrToArray=string.split('');
   newStrToArray.sort();
   for (let i=0; i<newStrToArray.length; i++){
      if (newStrToArray[i]===newStrToArray[i+1]){
        suma+=1;
        
      }else{
        objeto[newStrToArray[i]]=suma;
        suma=1; 
      }
    };
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arrLowerCase=[];
   let arrUpperCase=[];
   let nStringInver="";
   for (let i= 0; i< string.length; i++){
      if(string[i]===string[i].toUpperCase()){
         arrUpperCase.push([string[i]]);
      }else{
         arrLowerCase.push([string[i]]);
      }
   };
  
   nStringInver= arrUpperCase.join("") + arrLowerCase.join(""); 
   return nStringInver;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrayAsAmirror=[];
   let arrayMirror=[];
   let newString="";
   arrayAsAmirror= frase.split(' ');
   for (let i =0; i< arrayAsAmirror.length; i++){
      var reverse = arrayAsAmirror[i].split("").reverse().join("");
      arrayMirror.push(reverse);
    };
    newString = arrayMirror.join(' ');
return newString;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numToString= numero.toString();
   let numRevers= numToString.split('').reverse().join('');
   if (numToString === numRevers){
      return "Es capicua";
   }else{
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
/* let nStrg='';
return nStrg.filter(('a','b','c') => el.includes(query.toLowerCase())); */
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   /* let newArray=[];
   for (let i=0; i< arrayOfStrings.length; i++){
      for (let j=1; i< arrayOfStrings.length; j++){
         if (arrayOfStrings[i].length <= arrayOfStrings[j].length){
            newArray.push(arrayOfStrings[i]);
         }
      }
   } */
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
 /*   let arrayNumbers=[];
   if(array1.includes(array2)){
      arrayNumbers.push();
   };
   return arrayNumbers */
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

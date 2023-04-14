/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   nuevoArray = [];
   for (let clave in objeto){
      nuevoArray.push([clave,objeto[clave]]);
   };return nuevoArray;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   obj = {};
   for(let i = 0;i < string.length;i++){
      if(obj.hasOwnProperty(string[i])){/*-2- este se ejecuta en la sigueinte vuelta si es que la siguiente palabra */
         obj[string[i]] = obj[string[i]] + 1;/*del string es la misma letra ya alamacenada, y si esta, a esta se le suma*/
      }                                      /* un 1, sumando asi 2 palabras repetidas */
      else{                                  
         obj[string[i]] = 1;/*-1- se ejecuta primero ya que no hay ninguna propiedad en obj, y con este codigo se agrega */
      }                     /*un valor a obj, y este al ser agregado vale 1, acompñado de la letra agregada */
   };return obj;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   mayus = string.match(/[A-Z]/g);
   minus = string.match(/[a-z]/g);
   return resultado = mayus.concat(minus).join(""); 

   // var minus = "";
   // var mayus = "";
   // for (let i = 0; i < string.length; i++) {
   //    if(string[i] === string[i].toLowerCase()){
   //       minus = minus + string[i];
   //    }else{
   //       mayus = mayus + string[i];
   //    }; 
   // };return resultado = mayus + minus;
}
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   string = "";
   wordInvert = [];
   frase = frase.split(" ");
   for (let i = 0; i < frase.length; i++) {
      wordInvert.push(frase[i].split("").reverse().join("") + " ");
   };string = wordInvert.join("");
   return string.trim();

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
  numeroOriginal = numero.toString();
  numeroInvertido = numeroOriginal.split("").reverse().join("");
  if (numeroOriginal === numeroInvertido){
   return "Es capicua"
  }else{
   return "No es capicua"
  }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string = string.replace(/[abc]/g,"");
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   newArray = [];
   newArray = arrayOfStrings.sort((a,b) => a.length - b.length);
   return newArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   newArray = [];
   for (let i = 0; i < array1.length; i++) {
      if(array2.includes(array1[i])){
         newArray.push(array1[i])
      }
   }return newArray;

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

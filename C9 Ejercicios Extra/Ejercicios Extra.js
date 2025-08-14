/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let array = Object.entries(objeto);
  return array;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let letra = 1;
  let letrasContadas = {};
  let newString = string.split('').sort().join('');
  for (let i = 0; i < newString.length; i++) {
    if(newString[i] == newString[i+1]){
      letra++
    }else{
      letrasContadas[newString[i]]=letra;
      letra = 1;
    }
  }
  return letrasContadas
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str1 = [];
  let str2 = [];
  for (let i = 0; i < string.length; i++) {
    if(mayus.includes(string[i])){
      str1.push(string[i])
    } else {
      str2.push(string[i])
    }
  }
  return str1.join("")+str2.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let frase1 = frase.split(" ");
  let fraseAlreves = [];
  for (let i = 0; i < frase1.length; i++) {
    frase = frase1[i].split("").reverse().join("");
    fraseAlreves.push(frase);
  }
  return fraseAlreves.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroAlReves = numero.toString().split("").reverse().join("");
  if(numero == numeroAlReves){
    return "Es capicua";
  }
  return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  string = string.split("");
  let sinABC = [];
  for (let i = 0; i < string.length; i++) {
    if(string[i] == "a" || string[i] == "b" || string[i] == "c"){
      continue;
    }
    sinABC.push(string[i]);
  }
  return sinABC.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  /*let largo = [];
  let palabras = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    largo.push(arrayOfStrings[i].length);
  }
  for (let i = 0; i < arrayOfStrings.length; i++) {
        
  }*/
  return arrayOfStrings.sort((word1, word2) => word1.length - word2.length)
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arrayFinal = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if(array1[i]==array2[j]){
        arrayFinal.push(array1[i])
      }
    }
  }
  return arrayFinal;
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

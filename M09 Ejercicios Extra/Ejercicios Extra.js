/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arregloDeArreglos = [];

  // Iteramos sobre las claves del objeto utilizando el método Object.keys().
  Object.keys(objeto).forEach((clave) => {
    // Por cada clave, obtenemos su valor y creamos un nuevo arreglo [clave, valor].
    const valor = objeto[clave];
    const arregloClaveValor = [clave, valor];

    // Agregamos el nuevo arreglo al arreglo principal.
    arregloDeArreglos.push(arregloClaveValor);
  });

  // Retornamos el arreglo de arreglos con los pares clave-valor del objeto.
  return arregloDeArreglos;
}
//const miObjeto = { D: 1, B: 2, C: 3 };
//const arregloResultado = deObjetoAarray(miObjeto);
//onsole.log(arregloResultado);

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const charCount = {};

  // Recorremos el string letra por letra.
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Si la letra ya existe como propiedad en el objeto, incrementamos su contador.
    if (charCount[char]) {
      charCount[char]++;
    } else {
      // Si la letra no existe, la agregamos al objeto con un contador inicial de 1.
      charCount[char] = 1;
    }
  }

  // Creamos un nuevo objeto con las letras ordenadas alfabéticamente.
  const sortedCharCount = {};
  Object.keys(charCount)
    .sort()
    .forEach((key) => {
      sortedCharCount[key] = charCount[key];
    });

  // Retornamos el objeto con las apariciones de cada letra.
  return sortedCharCount;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let upperCaseLetters = "";
  let lowerCaseLetters = "";

  // Separar las letras mayúsculas y minúsculas en dos strings diferentes.
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase()) {
      upperCaseLetters += char;
    } else {
      lowerCaseLetters += char;
    }
  }

  // Retornar el string con las letras mayúsculas al comienzo, seguido por las minúsculas.
  return upperCaseLetters + lowerCaseLetters;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   // Dividir la frase en palabras utilizando el método split().
  const palabras = frase.split(" ");

  // Revertir cada palabra individualmente utilizando el método split(), reverse() y join().
  const palabrasAlReves = palabras.map((palabra) => palabra.split("").reverse().join(""));

  // Unir las palabras al revés para formar el nuevo string utilizando el método join().
  const resultado = palabrasAlReves.join(" ");

  // Retornar el nuevo string con las palabras al revés pero manteniendo el orden de las palabras en la frase.
  return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
     // Convertimos el número a string para poder invertirlo.
  const numeroStr = numero.toString();

  // Obtenemos el reverso del número convirtiendo el string a un arreglo, invirtiéndolo y luego uniendo sus elementos.
  const reversoStr = numeroStr.split("").reverse().join("");

  // Comparamos el número original con su reverso para determinar si es capicúa.
  if (numeroStr === reversoStr) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   
   // Utilizamos el método replace() con una expresión regular para eliminar las letras "a", "b" y "c".
  const nuevoString = string.replace(/[abc]/gi, "");

  // Retornamos el nuevo string sin las letras "a", "b" y "c".
  return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   const sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length);

   // Retornamos el nuevo arreglo con las palabras ordenadas según la longitud.
   return sortedArray;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   // Utilizamos el método filter() para crear un nuevo arreglo con los elementos en común.
  const interseccion = array1.filter((elemento) => array2.includes(elemento));

  // Retornamos el nuevo arreglo con los elementos en común entre ambos arreglos.
  return interseccion;
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

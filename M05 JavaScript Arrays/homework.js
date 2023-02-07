/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
const arr3 = [53,3,23,53,214,128,426,732];

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

//console.log(devolverPrimerElemento(arr3));

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

//console.log(devolverUltimoElemento([53,3,23,53,214,128,426,732]));

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
//console.log(obtenerLargoDelArray([53,3,23,53,214,128,426,732]));

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
  return array.map(num => num + 1);
}
//console.log(incrementarPorUno([53,3,23,53,214,128,426,732]));

const arr2 = ["uno","dos","tres"]

const prop = "cuatro";
const prop2 = "nueve";

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
console.log("agregarItemAlFinalDelArray",agregarItemAlFinalDelArray(arr2, prop));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

console.log("agregarItemAlComienzoDelArray",agregarItemAlComienzoDelArray(arr2,prop2) );

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   return palabras.join(" ");
   
}

console.log(dePalabrasAFrase(["Hola","Mundo!"]));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}
console.log(arrayContiene([1,2,3,4,5], 6));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   arrayOfNums.forEach(num => suma += num);
   return suma;
}

console.log(agregarNumeros([1,2,3]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sum = 0;
   for(let i = 0; i < resultadosTest.length; i++){
      sum += resultadosTest[i];
   }
   return sum / resultadosTest.length;
}

console.log(promedioResultadosTest([2,3,4,5,6,3,2]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   //return Math.max.apply(null, arrayOfNums);
   let max = arrayOfNums[0];
   for (let i = 1; i < arrayOfNums.length; i++) {
     if (arrayOfNums[i] > max) {
       max = arrayOfNums[i];
     }
   }
   return max;
}
console.log(numeroMasGrande([2,3,4,5,6,3,8]));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1) {
      return arguments[0]
   } else {
      let product = 1;
      for (let index = 0; index < arguments.length; index++) {
         product *= arguments[index];
      }
      return product;
   }

   //con metodos de array
   // if (arguments.length === 0) {
   //    return 0;
   //  } else if (arguments.length === 1) {
   //    return arguments[0];
   //  } else {
   //    return Array.from(arguments).reduce((product, currentValue) => product * currentValue, 1);
   //  }
}
console.log(multiplicarArgumentos(2,3,4));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   //let porUno = array.length
   let porUno = array.filter(numero => numero > 18);
   return porUno.length;
}
console.log(cuentoElementos([16,17,18,19,24,23]));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 6 || numeroDeDia === 7) {
      return "Es fin de semana";
    } else {
    return "Es día laboral";
   }
}
console.log(diaDeLaSemana(5));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return String(num).startsWith("9");
}
console.log("Empieza con nueve?",empiezaConNueve(9.4));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return array.every(elemento => elemento === array[0])
}
console.log("si los elementos son iguales?",todosIguales([1,1,1]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let mesesEncontrar = ["marzo","noviembre","enero"];
   let mesesBuscados = [];

   for(const month of array){
      if(mesesEncontrar.includes(month)){
         mesesBuscados.push(month)
      }
   }

   if(mesesBuscados.length === mesesEncontrar.length){
      return mesesBuscados;
   } else {
      return "No se encontraron los meses pedidos";
   }
}
console.log(mesesDelAño(["marzo", "abril", "mayo", "noviembre", "octubre", "enero"]));

// for...in se utiliza para recorrer propiedades de objetos y devuelve las claves o índices de las propiedades.

// for...of se utiliza para recorrer elementos de arreglos y devuelve los valores de los elementos.

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let array = [1,2,3,4,5,6,7,8,9,10];
   let newArray = [];
   for(let num of array){
      newArray.push(num * 6);
   }
   return newArray;
}
console.log(tablaDelSeis());


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter(number => number > 100);
   
}
console.log(mayorACien([100, 101, 40, 27, 37, 200, 168, 99, 105]));


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

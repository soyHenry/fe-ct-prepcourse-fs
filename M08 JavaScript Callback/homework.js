
/*-----------------1er ejercicio---------------- */
   let nombre = "diego";
   let resultado;

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
    resultado = nombre.charAt(0).toLocaleUpperCase()+nombre.slice(1);
    return resultado;
}

console.log("Ejercicio1",mayuscula(nombre));


/*-----------------2er ejercicio---------------- */
function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb = ""
   var resultado = cb;
   return resultado;
}

console.log("Ejercicio2",invocarCallback(nombre));


/*-----------------3er ejercicio---------------- */
let rp1 = 3;
let rp2 = 4;
const sum = (() => rp1 + rp2)

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var resultado = cb(num1, num2);
   return resultado;
}

console.log("Ejercicio3",operacionMatematica(rp1, rp2, sum));


/*-----------------4er ejercicio---------------- */
let array = [1,2,3,4,5];
let sumar;

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   ;
   cb = arrayOfNumbers.reduce((a,b) => a + b)
   return cb;
}

console.log("Ejercicio4",sumarArray(array, sumar));


/*-----------------5er ejercicio---------------- */
const array2 = ['mi','nombre','es','Diego'];
const logSumar = function(word) {
   return word; };

function forEach(array, cb) {
   let result = '';
   array.forEach(element => {
      result += cb(element) + ' ';
   });
   return result.trim();
}

console.log("Ejercicio5",forEach(array2, logSumar));


/*-----------------6er ejercicio---------------- */
let array3 = [1,2,3,4]
let retSum = function(num) {return num * 2 }

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let res;
   res = array.map(cb)
   return res;
}

console.log("Ejercicio6",map(array3, retSum));


/*-----------------7er ejercicio---------------- */

let array4 = ["arbol", "perro" , "antonio", "tabasco", "celular", "cereal", "dinero", "avion"];

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var letA =  /\ba\w+/g;
   let res = arrayOfStrings.filter(element => element.match(letA))
   return res;
}

console.log("Ejercicio8",filter(array4));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};

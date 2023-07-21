/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   if (typeof nombre !== "string" || nombre.length === 0) {
      // Si el argumento no es un string o está vacío, retornamos un mensaje de error.
      return "Por favor, introduce un nombre válido.";
    }
  
    // Obtenemos la primera letra del nombre en mayúscula y el resto del nombre.
    const primeraLetraMayuscula = nombre.charAt(0).toUpperCase();
    const restoDelNombre = nombre.slice(1);
  
    // Concatenamos la primera letra en mayúscula con el resto del nombre y lo retornamos.
    return primeraLetraMayuscula + restoDelNombre;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
    // Calculamos la suma de los números del arreglo.
  const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);

  // Pasamos la suma como argumento al callback `cb`.
  cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      // Ejecutamos el callback pasándole el elemento actual como argumento.
      cb(array[i]);
}
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   const newArray = [];

   // Iteramos sobre el arreglo y pasamos cada elemento al callback `cb`.
   // Luego, almacenamos el resultado devuelto por el callback en el nuevo arreglo.
   for (let i = 0; i < array.length; i++) {
     const resultado = cb(array[i]);
     newArray.push(resultado);
   }
 
   // Retornamos el nuevo arreglo con los resultados.
   return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const newArray = [];

   // Iteramos sobre el arreglo para identificar los elementos que comienzan con "a".
   for (let i = 0; i < arrayOfStrings.length; i++) {
     const element = arrayOfStrings[i];
 
     // Comprobamos si el elemento comienza con "a" (ignorando mayúsculas y minúsculas).
     // Usamos toLowerCase() para hacer la comparación más flexible.
     if (element.charAt(0).toLowerCase() === "a") {
       // Si el elemento cumple la condición, lo agregamos al nuevo arreglo.
       newArray.push(element);
     }
   }
 
   // Retornamos el nuevo arreglo con los elementos que comienzan con "a".
   return newArray;
   
}

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

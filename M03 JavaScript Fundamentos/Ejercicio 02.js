/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   let miString = "Henry";
   return miString;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   let miSuma = x + y;
   return miSuma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   let miResta = x - y;
   return miResta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   let miDivision = x / y;
   return miDivision;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   let miMult = x * y;
   return miMult;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   let resto = x % y;
   return resto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

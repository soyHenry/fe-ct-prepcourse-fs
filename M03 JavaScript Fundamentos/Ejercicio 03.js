/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   if (x === y) return true
   else return false
}

function tienenMismaLongitud(str1, str2) {
   if(str1.length === str2.length) return true
   else return false
}

function menosQueNoventa(num) {
   if(num < 90) return true
   else return false
}

function mayorQueCincuenta(num) {
   if(num > 50) return true
   else return false
}

function esPar(num) {
   if(num % 2 == 0) return true
   else return false
}

function esImpar(num) {
   if(num % 2 != 0) return true
   else return false
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

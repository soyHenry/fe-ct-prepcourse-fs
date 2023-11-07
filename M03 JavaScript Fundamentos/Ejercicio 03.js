/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   if (x === y){
      console.log(true);
      return (true);
   }
   else{
      console.log(false);
      return (false);
   }
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
}

function tienenMismaLongitud(str1, str2) {

   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:

   if (str1.length === str2.length){
      return(true);
   }
   else{
      return(false);
   }
}

function menosQueNoventa(num) {

   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90){
      console.log(true);
      return(true);
   }
   else{
      console.log(false);
      return(false);
   }
}

function mayorQueCincuenta(num) {
   if (num > 50){
      console.log(true);
      return(true);
   }
   else{
      console.log(false);
      return(false);
   }
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
}

function esPar(num) {
   if (num % 2 === 0){
      console.log(true);
      return(true);
   }
   else{
      console.log(false);
      return(false);
   }
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
}

function esImpar(num) {
   if (num % 3){
      console.log(true);
      return(true);
   }
   else{
      console.log(false);
      return(false);
   }
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
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

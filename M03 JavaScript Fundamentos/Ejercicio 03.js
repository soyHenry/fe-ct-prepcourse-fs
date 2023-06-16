/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   // solucion con funcion
   if ( x === y ) {
      return true;
   } else {
      return false;
   }
   //solucion rapida 
      return x === y;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   // solucion con funcion
   if (str1 .length === str2 .length) {
      return true;
   } else {
      return false;
   }
   //solucion rapida 
   return str1 .length === str2 .length
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   // solucion con funcion
   if ( num < 90 ) {
      return true;
   } else {
      return false;
   }
   //solucion rapida 
   return num < 90;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   // solucion con funcion
   if ( num > 50 ) {
      return true;
   } else {
      return false;
   }
   //solucion rapida 
   return num > 50;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   // con funcion
      if ( num % 2 === 0) {
      return true;
   } else {
      return false;
   }
   // solucion rapida
   return ( num % 2) == 0;
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
  // solucion con funcion
  if ( num % 2 !== 0 ){
   return true;
  } else {
   return false;
  }
//   Solución rápida
   return (num % 2 !==0);
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

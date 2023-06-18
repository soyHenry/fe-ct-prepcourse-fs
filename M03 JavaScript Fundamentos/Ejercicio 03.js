/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
  return x === y ? true : false;
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length ? true : false;
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
}

function menosQueNoventa(num) {
  return num < 90 ? true : false;
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
}

function mayorQueCincuenta(num) {
  return num > 50 ? true : false;
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:
}

function esPar(num) {
  return num % 2 === 0 ? true : false;
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
}

function esImpar(num) {
  return num % 2 !== 0 ? true : false;

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

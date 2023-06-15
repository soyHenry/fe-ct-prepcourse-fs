/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
  return x >= y ? x : y;
  // "x" e "y" son números enteros.
  // Retornar el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
}

function mayoriaDeEdad(edad) {
  return edad >= 18 ? "Allowed" : "Not allowed";
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años ó más debe retornar el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
}

function conection(status) {
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
}

function saludo(idioma) {
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "ingles":
      return "Hello!";
      break;
    default:
      return "Hola!";
      break;
  }
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
  // Tu código:
}

function colors(color) {
  switch (color) {
    case "blue":
      return "This is blue";
      break;
    case "red":
      return "This is red";
      break;
    case "green":
      return "This is green";
      break;
    case "orange":
      return "This is orange";
      break;
    default:
      return "Color not found";
      break;
  }
  // La función recibe un color. Retornar el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // IMPORTANTE: utilizar el statement SWITCH.
  // Tu código:
}

function esDiezOCinco(num) {
  return num === 10 || num === 5;
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
}

function estaEnRango(num) {
  return num < 50 && num > 20;

  // Retornar true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
}

function esEntero(num) {
  return num % 1 === 0;
  // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return false;
  }

  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
}

function operadoresLogicos(num1, num2, num3) {
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Numero 1 es mayor y positivo";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num3 > num2 && num3 > num1) {
    return num3 + 1;
  } else if (num1 === 0 && num2 === 0 && num3 === 0) {
    return "Error";
  } else {
    return false;
  }
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  // Si todos los argumentos son cero, retornar ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retornar false.
  // Tu código:
}

function esPrimo(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;

  // Retornar true si "num" es primo.
  // De lo contrario retorna false.
  // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
  // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
  // [Nota]: los números negativos, 0 y 1 NO son números primos.
  // Tu código:
}

function esVerdadero(valor) {
  return valor ? "Soy verdadero" : "Soy falso";
  // Si "valor" es verdadero retornar "Soy verdadero".
  // Caso contrario, retornar "Soy falso".
  // Tu código:
}

function tieneTresDigitos(num) {
  return num.toString().length === 3;
  // Si el número recibido tiene tres dígitos retornar true.
  // Caso contrario, retornar false.
  // Tu código:
}

function doWhile(num) {
  let count = 0;
  let result = num;
  do {
    result += 5;
    count++;
  } while (count < 8);
  return result;
  // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
  // Retornar el valor final.
  // Utilizar el bucle Do-While.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile,
};

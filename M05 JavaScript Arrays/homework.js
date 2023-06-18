/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  return array[0];
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
}

function devolverUltimoElemento(array) {
  return array[array.length - 1];

  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return array.length;
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
}

function incrementarPorUno(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }
  return result;
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  return palabras.join(" ");
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
}
function arrayContiene(array, elemento) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  let sum = 0;
  for (i = 0; i < arrayOfNums.length; i++) {
    sum += arrayOfNums[i];
  }
  return sum;
}
function promedioResultadosTest(resultadosTest) {
  let sum = 0;
  for (i = 0; i < resultadosTest.length; i++) {
    sum += resultadosTest[i];
  }
  return sum / resultadosTest.length;
}
function numeroMasGrande(arrayOfNums) {
  return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    const argsArray = Array.from(arguments);
    return argsArray.reduce((a, b) => a * b);
  }
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
}

function cuentoElementos(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] > 18 ? (count += 1) : (count += 0);
  }
  return count;
}

function diaDeLaSemana(numeroDeDia) {
  switch (numeroDeDia) {
    case 1:
      return "Es fin de semana";
      break;

    case 2:
      return "Es dia laboral";
      break;
    case 3:
      return "Es dia laboral";
      break;
    case 4:
      return "Es dia laboral";
      break;
    case 5:
      return "Es dia laboral";
      break;
    case 6:
      return "Es dia laboral";
      break;
    case 7:
      return "Es fin de semana";
      break;

    default:
      return;
      break;
  }
}
function empiezaConNueve(num) {
  return parseInt(num.toString()[0]) === 9;
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
}

function todosIguales(array) {
  for (i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }
  return true;
}

function mesesDelAño(array) {
  let arrayFiltered = [
    ...new Set(
      array.filter((x) => x == "Marzo" || x == "Noviembre" || x == "Enero")
    ),
  ];
  if (arrayFiltered.length < 3) {
    return "No se encontraron los meses pedidos";
  } else {
    return arrayFiltered;
  }
}

function tablaDelSeis() {
  let array = [];
  for (let i = 0; i <= 60; i += 6) {
    array.push(i);
  }
  return array;
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
}
function mayorACien(array) {
  let newArray = [];
  for (let i = 0; i < 200; i++) {
    if (array[i] > 100) {
      newArray.push(array[i]);
    }
  }
  return newArray;

  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
}
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  var array = [];
  var suma = num;
  for (var i = 0; i < 10; i++) {
    suma = suma + 2;
    if (suma === i) break;
    else {
      array.push(suma);
    }
  }
  if (i < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return array;
  }
}
function continueStatement(num) {
  var array = [];
  var suma = num;
  for (var i = 0; i < 10; i++) {
    if (i + 1 === 5) {
      continue;
    } else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
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

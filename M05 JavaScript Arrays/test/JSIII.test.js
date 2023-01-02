/* eslint-disable no-undef */
const {
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
} = require('../homework');

describe('JAVASCRIPT III', function () {
   describe('devolverPrimerElemento(array)', function () {
      it('Debe retornar el primer elemento del arreglo', function () {
         expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
         expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
      });
   });

   describe('devolverUltimoElemento(array)', function () {
      it('Debe retornar el último elemento del arreglo', function () {
         expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
         expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
         expect(
            devolverUltimoElemento([
               'hi',
               'there',
               'how',
               'are',
               'you',
               'doing?',
            ])
         ).toBe('doing?');
      });
   });

   describe('obtenerLargoDelArray(array)', function () {
      it('Debe retornar la longitud del arreglo', function () {
         expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
         expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
         expect(
            obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?'])
         ).toBe(6);
      });
   });

   describe('incrementarPorUno(array)', function () {
      it('Debe retornar el arreglo con cada elemento aumentado en +1', function () {
         expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
         expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([
            98, 101, 81, 56, 73, 95,
         ]);
         expect(incrementarPorUno([])).toEqual([]);
      });
   });

   describe('agregarItemAlFinalDelArray(array, elemento)', function () {
      it('Debe retornar el arreglo con el elemento agregado al final', function () {
         expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([
            10, 10, 16, 12, 10,
         ]);
         expect(
            agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')
         ).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
         expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
      });
   });

   describe('agregarItemAlComienzoDelArray(array, elemento)', function () {
      it('Debe retornar el arreglo con el elemento agregado al comienzo', function () {
         expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([
            10, 10, 10, 16, 12,
         ]);
         expect(
            agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola')
         ).toEqual(['Hola', 97, 100, 80, 55, 72, 94]);
         expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
      });
   });

   describe('dePalabrasAFrase(palabras)', function () {
      it('Debe retornar un string con las palabras separadas por un espacio', function () {
         expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe(
            'Henry JavaScript Class'
         );
         expect(dePalabrasAFrase(['Henry'])).toBe('Henry');
      });
   });

   describe('arrayContiene(array, elemento)', function () {
      it('Debe retornar True si el arreglo contiene el elemento', function () {
         expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
      });
      it('Debe retornar False si el arreglo NO contiene el elemento', function () {
         expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
         expect(arrayContiene([], true)).toBe(false);
      });
   });

   describe('agregarNumeros(arrayOfNums)', function () {
      it('Debe retornar la suma de todos los números del arreglo', function () {
         expect(agregarNumeros([10, 10, 16])).toBe(36);
         expect(agregarNumeros([97, 100])).toBe(197);
         expect(agregarNumeros([0, 0, 0])).toBe(0);
      });
   });

   describe('promedioResultadosTest(resultadosTest)', function () {
      it('Debe retornar el promedio de todas las notas', function () {
         expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
         expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
      });
   });

   describe('numeroMasGrande(arrayOfNums)', function () {
      it('Debe retornar el número más grande del arreglo', function () {
         expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
         expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
         expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
      });
   });

   describe('multiplicarArgumentos()', function () {
      it('Debe retornar el producto de los argumentos', function () {
         const product = multiplicarArgumentos(5, 5);
         const product2 = multiplicarArgumentos();
         const product3 = multiplicarArgumentos(3, 3, 3, 3);
         const product4 = multiplicarArgumentos(1);
         const product5 = multiplicarArgumentos(10, 0, 10);
         expect(product).toBe(25);
         expect(product2).toBe(0);
         expect(product3).toBe(81);
         expect(product4).toBe(1);
         expect(product5).toBe(0);
      });
   });

   describe('cuentoElementos(array)', function () {
      it('Debe retornar la cantidad de elementos mayores a a 18', function () {
         expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
         expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
         expect(cuentoElementos([97, 20, 90, 50, 7, 709])).toBe(5);
      });
   });

   describe('diaDeLaSemana(numeroDeDia)', function () {
      it('Debe retornar "Es dia laboral" dependiendo del número del día', function () {
         expect(diaDeLaSemana(3)).toBe('Es dia laboral');
         expect(diaDeLaSemana(2)).toBe('Es dia laboral');
      });
      it('Debe retornar "Es fin de semana" dependiendo del número del día', function () {
         expect(diaDeLaSemana(1)).toBe('Es fin de semana');
         expect(diaDeLaSemana(7)).toBe('Es fin de semana');
      });
   });

   describe('empiezaConNueve(num))', function () {
      it('Debe retornar True si recibe un número que comienza con 9', function () {
         expect(empiezaConNueve(98)).toBe(true);
         expect(empiezaConNueve(9)).toBe(true);
      });
      it('Debe retornar False si recibe un número que NO comienza con 9', function () {
         expect(empiezaConNueve(2)).toBe(false);
         expect(empiezaConNueve(7)).toBe(false);
         expect(empiezaConNueve(-5)).toBe(false);
      });
   });

   describe('todosIguales(array)', function () {
      it('Debe retornar True si todos los números del arreglo son iguales', function () {
         expect(todosIguales([20, 20, 20, 20])).toBe(true);
         expect(todosIguales([230, 230, 230, 230])).toBe(true);
      });
      it('Debe retornar False si NO todos los números del arreglo son iguales', function () {
         expect(todosIguales([97, 100, 190, 9])).toBe(false);
      });
   });

   describe('mesesDelAño(array)', function () {
      var ok = [
         'Marzo',
         'Diciembre',
         'Abril',
         'Junio',
         'Julio',
         'Noviembre',
         'Enero',
         'Mayo',
         'Febrero',
      ];
      var notOk = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];
      it('Debe retornar un arreglo con los meses requeridos', function () {
         expect(mesesDelAño(ok)).toEqual(['Marzo', 'Noviembre', 'Enero']);
      });
      it('Debe retornar el mensaje si alguno de los meses no se encuentra en el arreglo', function () {
         expect(mesesDelAño(notOk)).toEqual(
            'No se encontraron los meses pedidos'
         );
      });
   });

   describe('tablaDelSeis()', function () {
      it('Debe retornar la tabla de multiplicar del 6 en un arreglo', function () {
         expect(tablaDelSeis()).toEqual([
            0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60,
         ]);
      });
   });

   describe('mayorACien(array)', function () {
      it('Debe retornar un arreglo con todos los número mayores a 100', function () {
         var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
         expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
      });
   });

   describe('EXTRA CREDIT | breakStatement(num)', function () {
      it('Debe retornar un arreglo con los elementos incrementados en dos', function () {
         expect(breakStatement(50)).toEqual([
            52, 54, 56, 58, 60, 62, 64, 66, 68, 70,
         ]);
      });
      it('La ejecución se debe interrumpir en el caso pedido', function () {
         expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
      });
   });

   describe('EXTRA CREDIT | continueStatement(num)', function () {
      it('Debe retornar un arreglo con los valores resultantes de incrementarlos en 2 siempre que el número y la iteración seas diferentes a 5', function () {
         expect(continueStatement(50)).toEqual([
            52, 54, 56, 58, 60, 62, 64, 66, 68,
         ]);
         expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]);
      });
   });
});

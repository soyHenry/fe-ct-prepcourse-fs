/* eslint-disable no-undef */
const {
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
} = require('../homework');

describe('JAVASCRIPT II', function () {
   describe('obtenerMayor(x, y)', function () {
      it('Debe retornar X si es mayor que Y', function () {
         expect(obtenerMayor(10, 5)).toBe(10);
      });
      it('Debe retornar Y si es mayor que X', function () {
         expect(obtenerMayor(50, 100)).toBe(100);
      });
      it('Si son iguales debe retornar cualquiera', function () {
         expect(obtenerMayor(1000, 1000)).toBe(1000);
      });
   });

   describe('mayoriaDeEdad(edad)', function () {
      it("Debe retornar 'Allowed' si la edad es igual o mayor a 18", function () {
         expect(mayoriaDeEdad(18)).toBe('Allowed');
         expect(mayoriaDeEdad(35)).toBe('Allowed');
      });
      it("Debe retornar 'Not allowed' si la edad es menor a 18", function () {
         expect(mayoriaDeEdad(7)).toBe('Not allowed');
      });
   });

   describe('conection(status)', function () {
      it('Debe retornar "Online" si el status es 1', function () {
         expect(conection(1)).toBe('Online');
      });
      it('Debe retornar "Away" si el status es 2', function () {
         expect(conection(2)).toBe('Away');
      });
      it('Debe retornar "Offline" si el status es cualquier otro valor', function () {
         expect(conection(3)).toBe('Offline');
      });
   });

   describe('saludo(idioma)', function () {
      it("Debe retornar 'Guten Tag!' por 'aleman'", function () {
         expect(saludo('aleman')).toBe('Guten Tag!');
      });
      it("Debe retornar 'Hello!' por 'ingles'", function () {
         expect(saludo('ingles')).toBe('Hello!');
      });
      it("Debe retornar 'Ni Hao!' por 'mandarin'", function () {
         expect(saludo('mandarin')).toBe('Ni Hao!');
      });
      it("Debe retornar 'Hola!' si el argumento no se especificó", function () {
         expect(saludo('frances')).toBe('Hola!');
         expect(saludo()).toBe('Hola!');
      });
   });

   describe('colors(color)', function () {
      it("Debe retornar 'This is {color}'", function () {
         expect(colors('blue')).toBe('This is blue');
         expect(colors('red')).toBe('This is red');
         expect(colors('green')).toBe('This is green');
         expect(colors('orange')).toBe('This is orange');
      });
      it("Debe retornar 'Color not found' si el argumento no es el esperado", function () {
         expect(colors()).toBe('Color not found');
         expect(colors('pink')).toBe('Color not found');
      });
   });

   describe('esDiezOCinco(num)', function () {
      it('Debe retornar True si num es 10 o 5', function () {
         expect(esDiezOCinco(10)).toBe(true);
         expect(esDiezOCinco(5)).toBe(true);
      });
      it('Debe retornar False si num no es 10 o 5', function () {
         expect(esDiezOCinco(11)).toBe(false);
         expect(esDiezOCinco(6)).toBe(false);
         expect(esDiezOCinco(0)).toBe(false);
         expect(esDiezOCinco(5.01)).toBe(false);
      });
   });

   describe('estaEnRango(num)', function () {
      it('Debe retornar True si num está en el rango', function () {
         expect(estaEnRango(35.5)).toBe(true);
         expect(estaEnRango(40)).toBe(true);
         expect(estaEnRango(49)).toBe(true);
         expect(estaEnRango(21)).toBe(true);
      });
      it('Debe retornar False si num está fuera de rango', function () {
         expect(estaEnRango(10)).toBe(false);
         expect(estaEnRango(20)).toBe(false);
         expect(estaEnRango(50)).toBe(false);
         expect(estaEnRango(100)).toBe(false);
      });
   });

   describe('esEntero(num)', function () {
      it('Debe retornar False si num no es entero', function () {
         expect(esEntero(0.5)).toBe(false);
      });
      it('Debe retornar True si num es un entero positivo', function () {
         expect(esEntero(5)).toBe(true);
      });
      it('Debe retornar True si num es un entero negativo', function () {
         expect(esEntero(-20)).toBe(true);
      });
      it('Debe retornar True si el argumento es cero', function () {
         expect(esEntero(0)).toBe(true);
      });
   });

   describe('fizzBuzz(num)', function () {
      it('Debe retornar "fizzbuzz" si num es divisible por 3 y 5', function () {
         expect(fizzBuzz(15)).toBe('fizzbuzz');
      });
      it('Debe retornar "fizz" si num es divisible por 3', function () {
         expect(fizzBuzz(9)).toBe('fizz');
      });
      it('Debe retornar "buzz" si num es divisible por 5', function () {
         expect(fizzBuzz(10)).toBe('buzz');
      });
      it('Debe retornar false si num NO es divisible por 5 ni 3', function () {
         expect(fizzBuzz(4)).toBe(false);
      });
   });

   describe('operadoresLogicos(num1, num2, num3)', function () {
      it("Debe retornar 'Numero 1 es mayor y positivo' si num1 es positivo y mayor que num2 y num3", function () {
         expect(operadoresLogicos(50, 2, 15)).toBe(
            'Numero 1 es mayor y positivo'
         );
      });
      it("Debe retornar 'Hay negativos' si alguno de los argumentos es negativo", function () {
         expect(operadoresLogicos(-1, 50, 2)).toBe('Hay negativos');
      });
      it('Debe retornar (num3 + 1) si num3 es mayor que num1 y num2', function () {
         expect(operadoresLogicos(1, 3, 10)).toBe(11);
      });
      it("Debe retornar 'Error' si todos los argumentos son igual a cero", function () {
         expect(operadoresLogicos(0, 0, 0)).toBe('Error');
      });
      it('Debe retornar false si no se coincide con alguna de las opciones mencionadas', function () {
         expect(operadoresLogicos(10, 30, 6)).toBe(false);
      });
   });

   describe('esPrimo(num)', function () {
      it('Debe retornar True si num es primo', function () {
         expect(esPrimo(7)).toBe(true);
         expect(esPrimo(97)).toBe(true);
         expect(esPrimo(11)).toBe(true);
      });
      it('Debe retornar False si num NO es primo', function () {
         expect(esPrimo(-9)).toBe(false);
         expect(esPrimo(0)).toBe(false);
         expect(esPrimo(1)).toBe(false);
         expect(esPrimo(100)).toBe(false);
         expect(esPrimo(4)).toBe(false);
         expect(esPrimo(57)).toBe(false);
      });
   });

   describe('esVerdadero(valor)', function () {
      it('Debe retornar "Soy verdadero" si valor es True', function () {
         expect(esVerdadero(true)).toBe('Soy verdadero');
      });
      it('Debe retornar "Soy falso" si valor es False', function () {
         expect(esVerdadero(false)).toBe('Soy falso');
      });
   });

   describe('tieneTresDigitos(num)', function () {
      it('Debe retornar True si num tiene tres dígitos', function () {
         expect(tieneTresDigitos(100)).toBe(true);
         expect(tieneTresDigitos(820)).toBe(true);
         expect(tieneTresDigitos(900)).toBe(true);
      });
      it('Debe retornar False si num no tiene tres dígitos', function () {
         expect(tieneTresDigitos(10)).toBe(false);
         expect(tieneTresDigitos(20000)).toBe(false);
      });
   });

   describe('doWhile(num)', function () {
      it('Debe agregar 5 al número recibido un total de 8 veces y retornar el resultado', function () {
         expect(doWhile(5)).toBe(45);
         expect(doWhile(100)).toBe(140);
         expect(doWhile(-1)).toBe(39);
      });
   });
});

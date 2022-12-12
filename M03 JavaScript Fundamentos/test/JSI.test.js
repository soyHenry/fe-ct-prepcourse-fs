/* eslint-disable no-undef */
const {
   nuevoString,
   nuevoNumero,
   nuevoBoolean,
   nuevaResta,
   nuevaMultiplicacion,
   nuevoModulo,
} = require('../Ejercicio 01');

const {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
} = require('../Ejercicio 02');

const {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
} = require('../Ejercicio 03');

const {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
} = require('../Ejercicio 04');

const {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
} = require('../Ejercicio 05');

describe('JAVASCRIPT I', function () {
   describe('EJERCICIO 01', function () {
      describe('nuevoString', function () {
         it('Debe ser un string', function () {
            expect(typeof nuevoString).toBe('string');
         });
      });

      describe('nuevoNumero', function () {
         it('Debe ser un número', function () {
            expect(typeof nuevoNumero).toBe('number');
         });
      });

      describe('nuevoBoolean', function () {
         it('Debe ser un booleano', function () {
            expect(typeof nuevoBoolean).toBe('boolean');
         });
      });

      describe('nuevaResta', function () {
         it('Debe ser la resta correcta', function () {
            expect(nuevaResta).toBe(true);
         });
      });

      describe('nuevaMultiplicación', function () {
         it('Debe ser la multiplicación correcta', function () {
            expect(nuevaMultiplicacion).toBe(true);
         });
      });

      describe('nuevoModulo', function () {
         it('Debe ser el resultado correcto del módulo', function () {
            expect(nuevoModulo).toBe(true);
         });
      });
   });

   describe('EJERCICIO 02', function () {
      describe('devolverString(str)', function () {
         it('Debe retornar el string provisto', function () {
            expect(devolverString('Henry')).toBe('Henry');
         });
      });

      describe('suma(x, y)', function () {
         it('Debe retornar la suma de los dos argumentos', function () {
            expect(suma(5, 5)).toBe(10);
            expect(suma(-1, 5)).toBe(4);
         });
      });

      describe('resta(x, y)', function () {
         it('Debe retornar la resta de los dos argumentos', function () {
            expect(resta(5, 5)).toBe(0);
            expect(resta(-1, 5)).toBe(-6);
            expect(resta(5, -5)).toBe(10);
            expect(resta(0, 0)).toBe(0);
         });
      });

      describe('divide(x, y)', function () {
         it('Debe retornar la division de los dos argumentos', function () {
            expect(divide(5, 5)).toBe(1);
            expect(divide(10, 5)).toBe(2);
            expect(divide(11, 2)).toBe(5.5);
         });
      });

      describe('multiplica(x, y)', function () {
         it('Debe retornar el producto de los dos argumentos', function () {
            expect(multiplica(5, 5)).toBe(25);
            expect(multiplica(10, -5)).toBe(-50);
            expect(multiplica(11, 0)).toBe(0);
         });
      });

      describe('obtenerResto(x, y)', function () {
         it('Debe retornar el resto de dividir x sobre y', function () {
            expect(obtenerResto(15, 5)).toBe(0);
            expect(obtenerResto(21, 5)).toBe(1);
            expect(obtenerResto(22, 5)).toBe(2);
         });
      });
   });

   describe('EJERCICIO 03', function () {
      describe('sonIguales(x, y)', function () {
         it('Debe devolver True si los argumentos son iguales', function () {
            expect(sonIguales(15, 15)).toBe(true);
            expect(sonIguales('test', 'test')).toBe(true);
         });
         it('Debe devolver False si los argumentos no son iguales', function () {
            expect(sonIguales(90, 50)).toBe(false);
         });
      });

      describe('tienenMismaLongitud(str1, str2)', function () {
         it('Debe devolver True si los strings tienen la misma longitud', function () {
            expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
         });
         it('Debe devolver False si los strings tienen la distinta longitud', function () {
            expect(tienenMismaLongitud('hi', 'there')).toBe(false);
         });
      });

      describe('menosQueNoventa(num)', function () {
         it('Debe devolver True si el número es menor a noventa', function () {
            expect(menosQueNoventa(15)).toBe(true);
         });
         it('Debe devolver False si el número no es menor a noventa', function () {
            expect(menosQueNoventa(90)).toBe(false);
            expect(menosQueNoventa(100)).toBe(false);
         });
      });

      describe('mayorQueCincuenta(num)', function () {
         it('Debe devolver True si el número es mayor a cincuenta', function () {
            expect(mayorQueCincuenta(15)).toBe(false);
            expect(mayorQueCincuenta(50)).toBe(false);
            expect(mayorQueCincuenta(60)).toBe(true);
         });
         it('Debe devolver False si el número no es mayor a cincuenta', function () {
            expect(mayorQueCincuenta(15)).toBe(false);
            expect(mayorQueCincuenta(50)).toBe(false);
            expect(mayorQueCincuenta(60)).toBe(true);
         });
      });

      describe('esPar(num)', function () {
         it('Debe devolver True si el número es par', function () {
            expect(esPar(6)).toBe(true);
            expect(esPar(0)).toBe(true);
         });
         it('Debe devolver False si el número no es par', function () {
            expect(esPar(7)).toBe(false);
         });
      });

      describe('esImpar(num)', function () {
         it('Debe devolver True si el número es impar', function () {
            expect(esImpar(6)).toBe(false);
            expect(esImpar(7)).toBe(true);
            expect(esImpar(0)).toBe(false);
         });
         it('Debe devolver False si el número no es impar', function () {
            expect(esImpar(6)).toBe(false);
            expect(esImpar(7)).toBe(true);
            expect(esImpar(0)).toBe(false);
         });
      });
   });

   describe('EJERCICIO 04', function () {
      describe('elevarAlCuadrado(num)', function () {
         it('Debe devolver el número elevado al cuadrado', function () {
            expect(elevarAlCuadrado(6)).toBe(36);
            expect(elevarAlCuadrado(7)).toBe(49);
            expect(elevarAlCuadrado(0)).toBe(0);
            expect(elevarAlCuadrado(-5)).toBe(25);
         });
      });

      describe('elevarAlCubo(num)', function () {
         it('Debe devolver el número elevado al cubo', function () {
            expect(elevarAlCubo(3)).toBe(27);
            expect(elevarAlCubo(0)).toBe(0);
            expect(elevarAlCubo(-5)).toBe(-125);
         });
      });

      describe('elevar(num, exponent)', function () {
         it('Debe devolver el número elevado al exponente indicado', function () {
            expect(elevar(2, 2)).toBe(4);
            expect(elevar(2, 3)).toBe(8);
            expect(elevar(0, 5)).toBe(0);
            expect(elevar(10, 1)).toBe(10);
         });
      });

      describe('redondearNumero(num)', function () {
         it('Debe devolver el número redondeado', function () {
            expect(redondearNumero(1.5)).toBe(2);
            expect(redondearNumero(2)).toBe(2);
            expect(redondearNumero(0.1)).toBe(0);
         });
      });

      describe('redondearHaciaArriba(num)', function () {
         it('Debe devolver el número redondeado para arriba', function () {
            expect(redondearHaciaArriba(1.5)).toBe(2);
            expect(redondearHaciaArriba(2)).toBe(2);
            expect(redondearHaciaArriba(0.1)).toBe(1);
         });
      });

      describe('numeroRandom()', function () {
         it('Debe devolver un número entre 0 y 1', function () {
            expect(typeof numeroRandom()).toBe('number');
            expect(numeroRandom()).toBeGreaterThanOrEqual(0);
            expect(numeroRandom()).toBeLessThan(1);
         });
         it('Debe devolver un número random', function () {
            expect(numeroRandom()).not.toBe(numeroRandom());
         });
      });
   });

   describe('EJERCICIO 05', function () {
      describe('esPositivo(num)', function () {
         it('Debe devolver el string "Es positivo" si el número es mayor a cero', function () {
            expect(esPositivo(23)).toBe('Es positivo');
         });
         it('Debe devolver el string "Es negativo" si el número es menor a cero', function () {
            expect(esPositivo(-2)).toBe('Es negativo');
         });
         it('Debe devolver False si el número es cero', function () {
            expect(esPositivo(0)).toBe(false);
         });
      });

      describe('agregarSimboloExclamacion(str)', function () {
         it('Debe agregar un signo de exclamacion al final del string', function () {
            expect(agregarSimboloExclamacion('hello world')).toBe(
               'hello world!'
            );
            expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
         });
      });

      describe('combinarNombres(nombre, apellido)', function () {
         it('Debe devolver los strings combinados con un espacio en el medio', function () {
            expect(combinarNombres('hello', 'world')).toBe('hello world');
            expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
         });
      });

      describe('obtenerSaludo(nombre)', function () {
         it("Debe devolver el string 'Hola {name}!'", function () {
            expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
            expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
         });
      });

      describe('obtenerAreaRectangulo(alto, ancho)', function () {
         it('Debe retornar el área correcta del rectángulo', function () {
            expect(obtenerAreaRectangulo(2, 2)).toBe(4);
            expect(obtenerAreaRectangulo(3, 6)).toBe(18);
            expect(obtenerAreaRectangulo(0, 2)).toBe(0);
         });
      });

      describe('retornarPerimetro(lado)', function () {
         it('Debe retornar el perímetro correcto del cuadrado', function () {
            expect(retornarPerimetro(2)).toBe(8);
            expect(retornarPerimetro(8)).toBe(32);
            expect(retornarPerimetro(0)).toBe(0);
         });
      });

      describe('areaDelTriangulo(base, altura)', function () {
         it('Debe retornar el área correcta del triángulo', function () {
            expect(areaDelTriangulo(10, 5)).toBe(25);
            expect(areaDelTriangulo(20, 10)).toBe(100);
            expect(areaDelTriangulo(0, 10)).toBe(0);
         });
      });

      describe('deEuroAdolar(euro)', function () {
         it('Debe retornar el valor correcto de euro a dolar', function () {
            expect(deEuroAdolar(100)).toBe(120);
            expect(deEuroAdolar(200)).toBe(240);
            expect(deEuroAdolar(50)).toBe(60);
         });
      });

      describe('esVocal(letra)', function () {
         it('Debe devolver el string "Dato incorrecto", si el valor ingresado tiene más de una letra', function () {
            expect(esVocal('la')).toBe('Dato incorrecto');
            expect(esVocal('pero')).toBe('Dato incorrecto');
         });
         it('Debe devolver el string "Dato incorrecto", si el valor ingresado no es vocal', function () {
            expect(esVocal('l')).toBe('Dato incorrecto');
            expect(esVocal('p')).toBe('Dato incorrecto');
         });
         it('Debe devolver el string "Es vocal", si el valor ingresado lo es', function () {
            expect(esVocal('a')).toBe('Es vocal');
            expect(esVocal('e')).toBe('Es vocal');
            expect(esVocal('i')).toBe('Es vocal');
            expect(esVocal('o')).toBe('Es vocal');
            expect(esVocal('u')).toBe('Es vocal');
         });
      });
   });
});

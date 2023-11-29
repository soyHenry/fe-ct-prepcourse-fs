const operadoresLogicos = require('../ejercicios/14');

test("Debe retornar 'Numero 1 es mayor y positivo' si num1 es positivo y mayor que num2 y num3", function () {
  expect(operadoresLogicos(50, 2, 15)).toBe('Numero 1 es mayor y positivo');
});

test("Debe retornar 'Hay negativos' si alguno de los argumentos es negativo", function () {
  expect(operadoresLogicos(-1, 50, 2)).toBe('Hay negativos');
});

test('Debe retornar (num3 + 1) si num3 es mayor que num1 y num2', function () {
  expect(operadoresLogicos(1, 3, 10)).toBe(11);
});

test("Debe retornar 'Error' si todos los argumentos son igual a cero", function () {
  expect(operadoresLogicos(0, 0, 0)).toBe('Error');
});

test('Debe retornar false si no se coincide con alguna de las opciones mencionadas', function () {
  expect(operadoresLogicos(10, 30, 6)).toBe(false);
});

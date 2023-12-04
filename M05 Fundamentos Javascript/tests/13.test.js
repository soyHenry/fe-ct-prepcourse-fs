const sonIguales = require("../ejercicios/13");

test('Debe devolver True si los argumentos son iguales', function () {
  expect(sonIguales(15, 15)).toBe(true);
  expect(sonIguales('test', 'test')).toBe(true);
});

test('Debe devolver False si los argumentos no son iguales', function () {
  expect(sonIguales(90, 50)).toBe(false);
});
const sonIguales = require("../ejercicios/11");

test('Debe retornar True si los argumentos son iguales', function () {
  expect(sonIguales(15, 15)).toBe(true);
  expect(sonIguales('test', 'test')).toBe(true);
});

test('Debe retornar False si los argumentos no son iguales', function () {
  expect(sonIguales(90, 50)).toBe(false);
});
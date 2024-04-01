const esPar = require("../ejercicios/15");

test('Debe retornar True si el número es par', function () {
  expect(esPar(6)).toBe(true);
  expect(esPar(0)).toBe(true);
});

test('Debe retornar False si el número no es par', function () {
  expect(esPar(7)).toBe(false);
});
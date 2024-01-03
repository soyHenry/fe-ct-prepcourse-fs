const esPar = require("../ejercicios/17");

test('Debe devolver True si el número es par', function () {
  expect(esPar(6)).toBe(true);
  expect(esPar(0)).toBe(true);
});

test('Debe devolver False si el número no es par', function () {
  expect(esPar(7)).toBe(false);
});
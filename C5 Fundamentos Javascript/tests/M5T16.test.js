const esImpar = require("../ejercicios/16");

test('Debe retornar True si el número es impar', function () {
  expect(esImpar(6)).toBe(false);
  expect(esImpar(7)).toBe(true);
  expect(esImpar(0)).toBe(false);
});

test('Debe retornar False si el número no es impar', function () {
  expect(esImpar(6)).toBe(false);
  expect(esImpar(7)).toBe(true);
  expect(esImpar(0)).toBe(false);
});
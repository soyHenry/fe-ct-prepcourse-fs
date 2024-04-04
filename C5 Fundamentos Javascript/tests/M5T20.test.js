const resta = require("../ejercicios/20");

test('Debe retornar la resta de los dos argumentos', function () {
  expect(resta(5, 5)).toBe(0);
  expect(resta(-1, 5)).toBe(-6);
  expect(resta(5, -5)).toBe(10);
  expect(resta(0, 0)).toBe(0);
});
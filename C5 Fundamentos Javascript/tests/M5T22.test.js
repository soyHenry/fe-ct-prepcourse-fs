const divide = require("../ejercicios/22");

test('Debe retornar la division de los dos argumentos', function () {
  expect(divide(5, 5)).toBe(1);
  expect(divide(10, 5)).toBe(2);
  expect(divide(11, 2)).toBe(5.5);
});
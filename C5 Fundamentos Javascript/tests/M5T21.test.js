const suma = require("../ejercicios/21");

test('Debe retornar la suma de los dos argumentos', function () {
  expect(suma(5, 5)).toBe(10);
  expect(suma(-1, 5)).toBe(4);
});

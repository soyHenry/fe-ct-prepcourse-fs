const obtenerResto = require('../ejercicios/23');

test('Debe retornar el resto de dividir x sobre y', function () {
  expect(obtenerResto(15, 5)).toBe(0);
  expect(obtenerResto(21, 5)).toBe(1);
  expect(obtenerResto(22, 5)).toBe(2);
});

const deEuroAdolar = require('../ejercicios/32');

test('Debe retornar el valor correcto de euro a dolar', function () {
  expect(deEuroAdolar(100)).toBe(120);
  expect(deEuroAdolar(200)).toBe(240);
  expect(deEuroAdolar(50)).toBe(60);
});

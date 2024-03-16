const esPositivo = require('../ejercicios/19');

test('Debe devolver el string "Es positivo" si el número es mayor a cero', function () {
  expect(esPositivo(23)).toBe('Es positivo');
});

test('Debe devolver el string "Es negativo" si el número es menor a cero', function () {
  expect(esPositivo(-2)).toBe('Es negativo');
});

test('Debe devolver False si el número es cero', function () {
  expect(esPositivo(0)).toBe(false);
});

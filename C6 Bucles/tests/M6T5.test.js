const esVerdadero = require('../ejercicios/05');

test('Debe retornar "Soy verdadero" si valor es True', function () {
  expect(esVerdadero(true)).toBe('Soy verdadero');
});

test('Debe retornar "Soy falso" si valor es False', function () {
  expect(esVerdadero(false)).toBe('Soy falso');
});

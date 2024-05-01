const elevarAlCuadrado = require('../ejercicios/31');

test('Debe retornar el número elevado al cuadrado', function () {
  expect(elevarAlCuadrado(6)).toBe(36);
  expect(elevarAlCuadrado(7)).toBe(49);
  expect(elevarAlCuadrado(0)).toBe(0);
  expect(elevarAlCuadrado(-5)).toBe(25);
});

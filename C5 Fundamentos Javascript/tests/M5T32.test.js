const elevarAlCubo = require('../ejercicios/32');

test('Debe retornar el número elevado al cubo', function () {
  expect(elevarAlCubo(3)).toBe(27);
  expect(elevarAlCubo(0)).toBe(0);
  expect(elevarAlCubo(-5)).toBe(-125);
});
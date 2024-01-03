const elevarAlCubo = require('../ejercicios/35');

test('Debe devolver el número elevado al cubo', function () {
  expect(elevarAlCubo(3)).toBe(27);
  expect(elevarAlCubo(0)).toBe(0);
  expect(elevarAlCubo(-5)).toBe(-125);
});
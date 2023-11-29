const obtenerAreaRectangulo = require('../ejercicios/29');

test('Debe retornar el área correcta del rectángulo', function () {
  expect(obtenerAreaRectangulo(2, 2)).toBe(4);
  expect(obtenerAreaRectangulo(3, 6)).toBe(18);
  expect(obtenerAreaRectangulo(0, 2)).toBe(0);
});

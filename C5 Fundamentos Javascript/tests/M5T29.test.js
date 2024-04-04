const areaDelTriangulo = require('../ejercicios/29');

test('Debe retornar el área correcta del triángulo', function () {
  expect(areaDelTriangulo(10, 5)).toBe(25);
  expect(areaDelTriangulo(20, 10)).toBe(100);
  expect(areaDelTriangulo(0, 10)).toBe(0);
});

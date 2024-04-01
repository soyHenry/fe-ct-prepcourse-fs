const multiplica = require('../ejercicios/21');

test('Debe retornar el producto de los dos argumentos', function () {
  expect(multiplica(5, 5)).toBe(25);
  expect(multiplica(10, -5)).toBe(-50);
  expect(multiplica(11, 0)).toBe(0);
});
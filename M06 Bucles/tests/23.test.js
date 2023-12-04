const doWhile = require('../ejercicios/23');

test('Debe agregar 5 al número recibido un total de 8 veces y retornar el resultado', function () {
  expect(doWhile(5)).toBe(45);
  expect(doWhile(100)).toBe(140);
  expect(doWhile(-1)).toBe(39);
});

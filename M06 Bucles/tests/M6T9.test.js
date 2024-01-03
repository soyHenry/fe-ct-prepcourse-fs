const conection = require('../ejercicios/09');

test('Debe retornar "Online" si el status es 1', function () {
  expect(conection(1)).toBe('Online');
});

test('Debe retornar "Away" si el status es 2', function () {
  expect(conection(2)).toBe('Away');
});

test('Debe retornar "Offline" si el status es cualquier otro valor', function () {
  expect(conection(3)).toBe('Offline');
});

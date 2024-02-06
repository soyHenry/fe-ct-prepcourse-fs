const tieneTresDigitos = require('../ejercicios/06');

test('Debe retornar True si num tiene tres dígitos', function () {
  expect(tieneTresDigitos(100)).toBe(true);
  expect(tieneTresDigitos(820)).toBe(true);
  expect(tieneTresDigitos(900)).toBe(true);
});

test('Debe retornar False si num no tiene tres dígitos', function () {
  expect(tieneTresDigitos(10)).toBe(false);
  expect(tieneTresDigitos(20000)).toBe(false);
});

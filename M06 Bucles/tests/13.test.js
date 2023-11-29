const esEntero = require('../ejercicios/13');

test('Debe retornar False si num no es entero', function () {
  expect(esEntero(0.5)).toBe(false);
});

test('Debe retornar True si num es un entero positivo', function () {
  expect(esEntero(5)).toBe(true);
});

test('Debe retornar True si num es un entero negativo', function () {
  expect(esEntero(-20)).toBe(true);
});

test('Debe retornar True si el argumento es cero', function () {
  expect(esEntero(0)).toBe(true);
});

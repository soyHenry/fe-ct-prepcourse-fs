const obtenerMayor = require('../ejercicios/03');

test('Debe retornar X si es mayor que Y', function () {
  expect(obtenerMayor(10, 5)).toBe(10);
});

test('Debe retornar Y si es mayor que X', function () {
  expect(obtenerMayor(50, 100)).toBe(100);
});

test('Si son iguales debe retornar cualquiera', function () {
  expect(obtenerMayor(1000, 1000)).toBe(1000);
});

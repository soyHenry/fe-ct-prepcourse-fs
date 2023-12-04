const productoEntreNúmeros = require('../ejercicios/18');

test('productoEntreNúmeros of 1 and 5 is 120', () => {
  expect(productoEntreNúmeros(1, 5)).toBe(120);
});

test('productoEntreNúmeros of 2 and 4 is 24', () => {
  expect(productoEntreNúmeros(2, 4)).toBe(24);
});

test('productoEntreNúmeros of 5 and 5 is 5', () => {
  expect(productoEntreNúmeros(5, 5)).toBe(5);
});

test('productoEntreNúmeros of 0 and 10 is 0', () => {
  expect(productoEntreNúmeros(0, 10)).toBe(0);
});

test('productoEntreNúmeros of -5 and 5 is 0', () => {
  expect(productoEntreNúmeros(-5, 5)).toBe(0);
});

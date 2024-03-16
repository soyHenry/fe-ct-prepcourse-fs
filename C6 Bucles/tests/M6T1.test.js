const esIgualYNegativo = require('../ejercicios/01');

test('ambos números son iguales y negativos', () => {
  expect(esIgualYNegativo(-5, -5)).toBe(true);
});

test('ambos números son iguales pero no negativos', () => {
  expect(esIgualYNegativo(5, 5)).toBe(false);
});

test('ambos números son negativos pero no iguales', () => {
  expect(esIgualYNegativo(-5, -10)).toBe(false);
});

test('ambos números son positivos y distintos', () => {
  expect(esIgualYNegativo(5, 10)).toBe(false);
});

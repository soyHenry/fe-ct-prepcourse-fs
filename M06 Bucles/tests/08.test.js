const esPositivoOInferiorA10 = require('../ejercicios/08');

test('returns true for positive numbers', () => {
  expect(esPositivoOInferiorA10(5)).toBe(true);
  expect(esPositivoOInferiorA10(100)).toBe(true);
  expect(esPositivoOInferiorA10(0.1)).toBe(true);
});

test('returns true for numbers less than 10', () => {
  expect(esPositivoOInferiorA10(5)).toBe(true);
  expect(esPositivoOInferiorA10(9)).toBe(true);
  expect(esPositivoOInferiorA10(0)).toBe(true);
});

test('returns false for negative numbers', () => {
  expect(esPositivoOInferiorA10(-5)).toBe(false);
  expect(esPositivoOInferiorA10(-100)).toBe(false);
});

test('returns false for numbers greater than or equal to 10', () => {
  expect(esPositivoOInferiorA10(10)).toBe(false);
  expect(esPositivoOInferiorA10(15)).toBe(false);
  expect(esPositivoOInferiorA10(100)).toBe(false);
});

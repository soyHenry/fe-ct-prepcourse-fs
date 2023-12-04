const esParYDivisiblePorTres = require('../ejercicios/07');

describe('esParYDivisiblePorTres', () => {
  test('should return true for 6', () => {
    expect(esParYDivisiblePorTres(6)).toBe(true);
  });

  test('should return false for 7', () => {
    expect(esParYDivisiblePorTres(7)).toBe(false);
  });

  test('should return false for 9', () => {
    expect(esParYDivisiblePorTres(9)).toBe(false);
  });

  test('should return true for 12', () => {
    expect(esParYDivisiblePorTres(12)).toBe(true);
  });

  test('should return false for 13', () => {
    expect(esParYDivisiblePorTres(13)).toBe(false);
  });

  test('should return false for 15', () => {
    expect(esParYDivisiblePorTres(15)).toBe(false);
  });
});

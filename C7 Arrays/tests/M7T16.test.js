const multiplicarElementosPorIndice = require('../ejercicios/16');

test('multiplicarElementosPorIndice([1, 2, 3, 4, 5]) returns [0, 2, 6, 12, 20]', () => {
   expect(multiplicarElementosPorIndice([1, 2, 3, 4, 5])).toEqual([
      0, 2, 6, 12, 20,
   ]);
});

test('multiplicarElementosPorIndice([0, 0, 0, 0, 0]) returns [0, 0, 0, 0, 0]', () => {
   expect(multiplicarElementosPorIndice([0, 0, 0, 0, 0])).toEqual([
      0, 0, 0, 0, 0,
   ]);
});

test('multiplicarElementosPorIndice([2, 4, 6, 8, 10]) returns [0, 4, 12, 24, 40]', () => {
   expect(multiplicarElementosPorIndice([2, 4, 6, 8, 10])).toEqual([
      0, 4, 12, 24, 40,
   ]);
});

test('multiplicarElementosPorIndice([]) returns []', () => {
   expect(multiplicarElementosPorIndice([])).toEqual([]);
});

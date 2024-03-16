const filtrarNumerosPares = require('../ejercicios/13');

describe('filtrarNumerosPares', () => {
   test('returns an empty array when given an empty array', () => {
      expect(filtrarNumerosPares([])).toEqual([]);
   });

   test('returns an empty array when given an array of only odd numbers', () => {
      expect(filtrarNumerosPares([1, 3, 5])).toEqual([]);
   });

   test('returns an array of only even numbers when given an array of only even numbers', () => {
      expect(filtrarNumerosPares([2, 4, 6])).toEqual([2, 4, 6]);
   });

   test('returns an array of only even numbers when given an array of mixed numbers', () => {
      expect(filtrarNumerosPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
   });
});

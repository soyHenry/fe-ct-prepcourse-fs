const encontrarIndiceMayor = require('../ejercicios/15');

test('encuentra el índice del número más grande en un array', () => {
   expect(encontrarIndiceMayor([1, 2, 3, 4, 5])).toBe(4);
   expect(encontrarIndiceMayor([5, 4, 3, 2, 1])).toBe(0);
   expect(encontrarIndiceMayor([1, 3, 2, 5, 4])).toBe(3);
   expect(encontrarIndiceMayor([-1, -2, -3, -4, -5])).toBe(0);
   expect(encontrarIndiceMayor([-5, -4, -3, -2, -1])).toBe(4);
   expect(encontrarIndiceMayor([-1, -3, -2, -5, -4])).toBe(0);
});

test('devuelve 0 para un array vacío', () => {
   expect(encontrarIndiceMayor([])).toBe(0);
});

test('devuelve 0 para un array con un solo elemento', () => {
   expect(encontrarIndiceMayor([42])).toBe(0);
});

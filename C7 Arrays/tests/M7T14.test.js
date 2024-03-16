const contarElementosMayoresA10 = require('../ejercicios/14');

test('contarElementosMayoresA10 devuelve la cantidad correcta de elementos mayores a 10', () => {
   expect(contarElementosMayoresA10([1, 2, 3, 4, 5])).toBe(0);
   expect(contarElementosMayoresA10([10, 20, 30, 40, 50])).toBe(4);
   expect(contarElementosMayoresA10([11, 12, 13, 14, 15])).toBe(5);
   expect(contarElementosMayoresA10([-1, 0, 1, 2, 3])).toBe(0);
});

test('contarElementosMayoresA10 devuelve 0 para un array vacío', () => {
   expect(contarElementosMayoresA10([])).toBe(0);
});

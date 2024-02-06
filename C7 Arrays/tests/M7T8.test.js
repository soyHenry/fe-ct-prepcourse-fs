const encontrarElemento = require('../ejercicios/08');

test('encuentra el elemento en el array', () => {
   expect(encontrarElemento(2, [1, 2, 3])).toBe(1);
});

test('no encuentra el elemento en el array', () => {
   expect(encontrarElemento(4, [1, 2, 3])).toBe(-1);
});

test('encuentra el elemento en un array vacío', () => {
   expect(encontrarElemento(1, [])).toBe(-1);
});

test('encuentra el elemento en un array con un solo elemento', () => {
   expect(encontrarElemento(1, [1])).toBe(0);
});

test('encuentra el elemento en un array con varios elementos iguales', () => {
   expect(encontrarElemento(2, [2, 2, 2])).toBe(0);
});

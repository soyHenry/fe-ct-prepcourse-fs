const invertirArray = require('../ejercicios/06');

test('Invertir array con elementos', () => {
   expect(invertirArray([1, 2, 3])).toEqual([3, 2, 1]);
});

test('Invertir array vacío', () => {
   expect(invertirArray([])).toEqual([]);
});

test('Invertir array con un solo elemento', () => {
   expect(invertirArray([4])).toEqual([4]);
});

test('Invertir array con elementos de diferentes tipos', () => {
   expect(invertirArray([1, 'hola', true, null, undefined])).toEqual([
      undefined,
      null,
      true,
      'hola',
      1,
   ]);
});

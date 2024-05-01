const numeroRandom = require('../ejercicios/36');

test('Debe retornar un número entre 0 y 1', function () {
   expect(typeof numeroRandom()).toBe('number');
   expect(numeroRandom()).toBeGreaterThanOrEqual(0);
   expect(numeroRandom()).toBeLessThan(1);
});

test('Debe retornar un número random', function () {
   expect(numeroRandom()).not.toBe(numeroRandom());
});

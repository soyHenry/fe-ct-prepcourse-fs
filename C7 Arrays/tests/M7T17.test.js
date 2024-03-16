const agregarNumeros = require('../ejercicios/17');

test('Debe retornar la suma de todos los números del arreglo', function () {
   expect(agregarNumeros([10, 10, 16])).toBe(36);
   expect(agregarNumeros([97, 100])).toBe(197);
   expect(agregarNumeros([0, 0, 0])).toBe(0);
});

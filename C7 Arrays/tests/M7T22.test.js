const tablaDelSeis = require('../ejercicios/22');

test('Debe retornar la tabla de multiplicar del 6 en un arreglo', function () {
   expect(tablaDelSeis()).toEqual([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
});

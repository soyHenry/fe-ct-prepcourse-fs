const agregarItemAlComienzoDelArray = require('../ejercicios/05');

test('Debe retornar el arreglo con el elemento agregado al comienzo', function () {
   expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([
      10, 10, 10, 16, 12,
   ]);
   expect(
      agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola')
   ).toEqual(['Hola', 97, 100, 80, 55, 72, 94]);
   expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
});

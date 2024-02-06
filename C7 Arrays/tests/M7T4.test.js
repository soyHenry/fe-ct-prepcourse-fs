const agregarItemAlFinalDelArray = require('../ejercicios/03');

test('Debe retornar el arreglo con el elemento agregado al final', function () {
   expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([
      10, 10, 16, 12, 10,
   ]);
   expect(
      agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')
   ).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
   expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
});

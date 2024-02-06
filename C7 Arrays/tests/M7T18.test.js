const promedioResultadosTest = require('../ejercicios/18');

test('Debe retornar el promedio de todas las notas', function () {
   expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
   expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
});

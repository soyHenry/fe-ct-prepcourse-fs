const retornarPerimetro = require('../ejercicios/30');

test('Debe retornar el perímetro correcto del cuadrado', function () {
   expect(retornarPerimetro(2)).toBe(8);
   expect(retornarPerimetro(8)).toBe(32);
   expect(retornarPerimetro(0)).toBe(0);
});

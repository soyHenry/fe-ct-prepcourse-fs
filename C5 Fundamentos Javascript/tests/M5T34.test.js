const redondearNumero = require('../ejercicios/34');

test('Debe retornar el número redondeado', function () {
   expect(redondearNumero(1.5)).toBe(2);
   expect(redondearNumero(2)).toBe(2);
   expect(redondearNumero(0.1)).toBe(0);
});

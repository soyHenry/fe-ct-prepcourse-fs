const redondearNumero = require('../ejercicios/37');

test('Debe devolver el número redondeado', function () {
   expect(redondearNumero(1.5)).toBe(2);
   expect(redondearNumero(2)).toBe(2);
   expect(redondearNumero(0.1)).toBe(0);
});

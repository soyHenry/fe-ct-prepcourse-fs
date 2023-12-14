const redondearHaciaArriba = require('../ejercicios/38');

test('Debe devolver el número redondeado para arriba', function () {
   expect(redondearHaciaArriba(1.5)).toBe(2);
   expect(redondearHaciaArriba(2)).toBe(2);
   expect(redondearHaciaArriba(0.1)).toBe(1);
});

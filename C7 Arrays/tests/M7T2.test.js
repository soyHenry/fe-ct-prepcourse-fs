const devolverUltimoElemento = require('../ejercicios/02');

test('Debe retornar el último elemento del arreglo', function () {
   expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
   expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
   expect(
      devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])
   ).toBe('doing?');
});

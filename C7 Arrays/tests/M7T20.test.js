const todosIguales = require('../ejercicios/20');

test('Debe retornar True si todos los números del arreglo son iguales', function () {
   expect(todosIguales([20, 20, 20, 20])).toBe(true);
   expect(todosIguales([230, 230, 230, 230])).toBe(true);
});
it('Debe retornar False si NO todos los números del arreglo son iguales', function () {
   expect(todosIguales([97, 100, 190, 9])).toBe(false);
});

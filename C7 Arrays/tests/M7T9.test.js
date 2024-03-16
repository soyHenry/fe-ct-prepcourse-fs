const obtenerElementoAleatorio = require('../ejercicios/09');

test('devuelve un elemento aleatorio de un array', () => {
   const array = [1, 2, 3, 4, 5];
   const elemento = obtenerElementoAleatorio(array);
   expect(array).toContain(elemento);
});

test('devuelve undefined si se le pasa un array vacío', () => {
   const array = [];
   const elemento = obtenerElementoAleatorio(array);
   expect(elemento).toBeUndefined();
});

test('devuelve el único elemento de un array con un solo elemento', () => {
   const array = [1];
   const elemento = obtenerElementoAleatorio(array);
   expect(elemento).toBe(1);
});

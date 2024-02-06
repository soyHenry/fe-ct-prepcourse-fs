const ordenarArray = require('../ejercicios/07');

test('ordenarArray ordena correctamente un array de números', () => {
   const arrayDesordenado = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
   const arrayOrdenado = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
   expect(ordenarArray(arrayDesordenado)).toEqual(arrayOrdenado);
});

test('ordenarArray ordena correctamente un array de strings', () => {
   const arrayDesordenado = ['perro', 'gato', 'elefante', 'jirafa', 'mono'];
   const arrayOrdenado = ['elefante', 'gato', 'jirafa', 'mono', 'perro'];
   expect(ordenarArray(arrayDesordenado)).toEqual(arrayOrdenado);
});

test('ordenarArray ordena correctamente un array vacío', () => {
   const arrayDesordenado = [];
   const arrayOrdenado = [];
   expect(ordenarArray(arrayDesordenado)).toEqual(arrayOrdenado);
});

test('ordenarArray ordena correctamente un array de un solo elemento', () => {
   const arrayDesordenado = [42];
   const arrayOrdenado = [42];
   expect(ordenarArray(arrayDesordenado)).toEqual(arrayOrdenado);
});

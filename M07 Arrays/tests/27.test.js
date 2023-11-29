const dePalabrasAFrase = require('../ejercicios/27');

test('Debe retornar un string con las palabras separadas por un espacio', function () {
  expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe(
    'Henry JavaScript Class'
  );
  expect(dePalabrasAFrase(['Henry'])).toBe('Henry');
});

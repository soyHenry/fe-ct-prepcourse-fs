const invertirTexto = require('../ejercicios/24');

test('Invertir texto con una palabra', () => {
  expect(invertirTexto('hola')).toBe('aloh');
});

test('Invertir texto con varias palabras', () => {
  expect(invertirTexto('hola mundo')).toBe('odnum aloh');
});

test('Invertir texto con caracteres especiales', () => {
  expect(invertirTexto('¡Hola, mundo!')).toBe('!odnum ,aloH¡');
});

test('Invertir texto vacío', () => {
  expect(invertirTexto('')).toBe('');
});

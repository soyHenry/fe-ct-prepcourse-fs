const esTipoDato = require('../ejercicios/07');

test('El tipo de dato ( typeof ) de "1" debe retornar "number"', () => {
  expect(esTipoDato(1)).toBe('number');
});

test('El tipo de dato ( typeof ) de "hello" debe retornar "string"', () => {
  expect(esTipoDato('hello')).toBe('string');
});

test('El tipo de dato ( typeof ) de "true" debe retornar "boolean"', () => {
  expect(esTipoDato(true)).toBe('boolean');
});

test('El tipo de dato ( typeof ) de "{}" debe retornar "object"', () => {
  expect(esTipoDato({})).toBe('object');
});

test('El tipo de dato ( typeof ) de "[]" debe retornar "object"', () => {
  expect(esTipoDato([])).toBe('object');
});

test('El tipo de dato ( typeof ) de "null" debe retornar "object"', () => {
  expect(esTipoDato(null)).toBe('object');
});

test('El tipo de dato ( typeof ) de "undefined" debe retornar "undefined"', () => {
  expect(esTipoDato(undefined)).toBe('undefined');
});

test('El tipo de dato ( typeof ) de "function(){}" debe retornar "function"', () => {
  expect(esTipoDato(function () {})).toBe('function');
});

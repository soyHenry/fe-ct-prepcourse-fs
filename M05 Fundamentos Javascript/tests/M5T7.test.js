const esTipoDato = require('../ejercicios/07');

test('typeof 1 should return "number"', () => {
  expect(esTipoDato(1)).toBe('number');
});

test('typeof "hello" should return "string"', () => {
  expect(esTipoDato('hello')).toBe('string');
});

test('typeof true should return "boolean"', () => {
  expect(esTipoDato(true)).toBe('boolean');
});

test('typeof {} should return "object"', () => {
  expect(esTipoDato({})).toBe('object');
});

test('typeof [] should return "object"', () => {
  expect(esTipoDato([])).toBe('object');
});

test('typeof null should return "object"', () => {
  expect(esTipoDato(null)).toBe('object');
});

test('typeof undefined should return "undefined"', () => {
  expect(esTipoDato(undefined)).toBe('undefined');
});

test('typeof function(){} should return "function"', () => {
  expect(esTipoDato(function () {})).toBe('function');
});

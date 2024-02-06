const convertirStringAMayusculas = require('../ejercicios/12.js');

test('convertirStringAMayusculas function exists', () => {
   expect(convertirStringAMayusculas).toBeDefined();
});

test('convertirStringAMayusculas returns an array', () => {
   const result = convertirStringAMayusculas(['hello', 'world']);
   expect(Array.isArray(result)).toBeTruthy();
});

test('convertirStringAMayusculas converts strings to uppercase', () => {
   const result = convertirStringAMayusculas(['hello', 'world']);
   expect(result).toEqual(['HELLO', 'WORLD']);
});

test('convertirStringAMayusculas handles empty array', () => {
   const result = convertirStringAMayusculas([]);
   expect(result).toEqual([]);
});

test('convertirStringAMayusculas handles array with one element', () => {
   const result = convertirStringAMayusculas(['hello']);
   expect(result).toEqual(['HELLO']);
});

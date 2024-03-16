const esAnagrama = require('../ejercicios/22');

test('anagrama de palabras iguales', () => {
   expect(esAnagrama('hola', 'hola')).toBe(true);
});

test('anagrama de palabras diferentes', () => {
   expect(esAnagrama('hola', 'aloh')).toBe(true);
});

test('palabras con diferente longitud', () => {
   expect(esAnagrama('hola', 'holaa')).toBe(false);
});

test('palabras con diferente cantidad de letras iguales', () => {
   expect(esAnagrama('hola', 'holb')).toBe(false);
});

test('palabras con espacios', () => {
   expect(esAnagrama('hola mundo', 'mundo hola')).toBe(true);
});

test('palabras con mayúsculas y minúsculas', () => {
   expect(esAnagrama('Hola', 'aloh')).toBe(true);
});

test('palabras con caracteres especiales', () => {
   expect(esAnagrama('hola!', '!aloh')).toBe(true);
});

test('palabras vacías', () => {
   expect(esAnagrama('', '')).toBe(true);
});

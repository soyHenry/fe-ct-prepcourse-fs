const esPalindromo = require('../ejercicios/32');

test("esPalindromo devuelve true para 'ana'", () => {
   expect(esPalindromo('ana')).toBe(true);
});

test("esPalindromo devuelve true para 'reconocer'", () => {
   expect(esPalindromo('reconocer')).toBe(true);
});

test("esPalindromo devuelve false para 'hola'", () => {
   expect(esPalindromo('hola')).toBe(false);
});

test("esPalindromo devuelve false para 'javascript'", () => {
   expect(esPalindromo('javascript')).toBe(false);
});

test("esPalindromo devuelve false para 'No subas, abusón'", () => {
   expect(esPalindromo('No subas, abusón')).toBe(false);
});

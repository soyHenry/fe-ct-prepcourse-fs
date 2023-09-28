// BEGIN: f8e9d7c6xw4a
const esPalindromo = require("../ejercicios/07");

test("esPalindromo devuelve true para 'ana'", () => {
  expect(esPalindromo("ana")).toBe(true);
});

test("esPalindromo devuelve true para 'reconocer'", () => {
  expect(esPalindromo("reconocer")).toBe(true);
});

test("esPalindromo devuelve true para 'La ruta nos aporto otro paso natural'", () => {
  expect(esPalindromo("La ruta nos aporto otro paso natural")).toBe(true);
});

test("esPalindromo devuelve false para 'hola'", () => {
  expect(esPalindromo("hola")).toBe(false);
});

test("esPalindromo devuelve false para 'javascript'", () => {
  expect(esPalindromo("javascript")).toBe(false);
});

test("esPalindromo devuelve false para 'No subas, abusón'", () => {
  expect(esPalindromo("No subas, abusón")).toBe(false);
});
// END: f8e9d7c6xw4a

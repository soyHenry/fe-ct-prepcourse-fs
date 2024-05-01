const devolverString = require("../ejercicios/10");

test('Debe retornar el string provisto "Henry"', function () {
  expect(devolverString('Henry')).toBe('Henry');
});

test('Debe retornar el string provisto "hola mundo"', function () {
  expect(devolverString('hola mundo')).toBe('hola mundo');
});
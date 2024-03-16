const devolverString = require("../ejercicios/12");

test('Debe retornar el string provisto', function () {
  expect(devolverString('Henry')).toBe('Henry');
});
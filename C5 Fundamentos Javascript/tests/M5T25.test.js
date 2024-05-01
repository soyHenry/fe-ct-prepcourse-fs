const combinarNombres = require("../ejercicios/25");

test('Debe retornar los strings combinados con un espacio en el medio', function () {
  expect(combinarNombres('hello', 'world')).toBe('hello world');
  expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
});
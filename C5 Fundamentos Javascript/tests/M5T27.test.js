const combinarNombres = require("../ejercicios/27");

test('Debe devolver los strings combinados con un espacio en el medio', function () {
  expect(combinarNombres('hello', 'world')).toBe('hello world');
  expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
});
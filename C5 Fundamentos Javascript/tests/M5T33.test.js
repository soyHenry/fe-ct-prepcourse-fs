const elevar = require("../ejercicios/33");

test('Debe retornar el número elevado al exponente indicado', function () {
  expect(elevar(2, 2)).toBe(4);
  expect(elevar(2, 3)).toBe(8);
  expect(elevar(0, 5)).toBe(0);
  expect(elevar(10, 1)).toBe(10);
});
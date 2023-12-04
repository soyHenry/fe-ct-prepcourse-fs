const mayoriaDeEdad = require('../ejercicios/04');

test("Debe retornar 'Allowed' si la edad es igual o mayor a 18", function () {
  expect(mayoriaDeEdad(18)).toBe('Allowed');
  expect(mayoriaDeEdad(35)).toBe('Allowed');
});

test("Debe retornar 'Not allowed' si la edad es menor a 18", function () {
  expect(mayoriaDeEdad(7)).toBe('Not allowed');
});

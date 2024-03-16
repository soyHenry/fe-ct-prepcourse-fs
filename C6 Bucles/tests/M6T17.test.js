const colors = require('../ejercicios/17');

test("Debe retornar 'This is {color}'", function () {
  expect(colors('blue')).toBe('This is blue');
  expect(colors('red')).toBe('This is red');
  expect(colors('green')).toBe('This is green');
  expect(colors('orange')).toBe('This is orange');
});

test("Debe retornar 'Color not found' si el argumento no es el esperado", function () {
  expect(colors()).toBe('Color not found');
  expect(colors('pink')).toBe('Color not found');
});

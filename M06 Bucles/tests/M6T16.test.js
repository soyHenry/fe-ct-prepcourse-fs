const saludo = require('../ejercicios/16');

test("Debe retornar 'Guten Tag!' por 'aleman'", function () {
  expect(saludo('aleman')).toBe('Guten Tag!');
});

test("Debe retornar 'Hello!' por 'ingles'", function () {
  expect(saludo('ingles')).toBe('Hello!');
});

test("Debe retornar 'Ni Hao!' por 'mandarin'", function () {
  expect(saludo('mandarin')).toBe('Ni Hao!');
});

test("Debe retornar 'Hola!' si el argumento no se especificó", function () {
  expect(saludo('frances')).toBe('Hola!');
  expect(saludo()).toBe('Hola!');
});

const obtenerSaludo = require('../ejercicios/26');

test("Debe retornar el string 'Hola {name}!'", function () {
  expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
  expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
});

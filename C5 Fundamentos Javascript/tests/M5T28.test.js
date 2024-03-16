const obtenerSaludo = require('../ejercicios/28');

test("Debe devolver el string 'Hola {name}!'", function () {
  expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
  expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
});

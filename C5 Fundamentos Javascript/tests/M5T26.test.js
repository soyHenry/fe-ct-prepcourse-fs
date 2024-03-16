const agregarSimboloExclamacion = require('../ejercicios/26');

test('Debe agregar un signo de exclamacion al final del string', function () {
  expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
  expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
});

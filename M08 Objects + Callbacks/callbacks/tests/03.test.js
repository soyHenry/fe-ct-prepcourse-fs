const operacionMatematica = require('../ejercicios/03');

test('Debe retornar el resultado del callback habiéndole pasado como arguemnto los números recibidos.', function () {
  const cb = jest.fn();
  operacionMatematica(100, 20, cb);
  expect(cb).toHaveBeenCalled();
});

const actualizarPassword = require('../ejercicios/17');

test('Debe devolver al usuario con la contraseña actualizada', function () {
  const user = {
    password: 'Me encanta JS!',
  };
  const password = 'Me encanta JS mucho más!';
  expect(actualizarPassword(user, password).password).toBe(password);
});

const nuevoUsuario = require('../ejercicios/09');

test('Debe devolver un nuevo objeto con las propiedades "nombre", "email" y "password"', function () {
  const user = {
    nombre: 'Jhon',
    email: 'jhon@email.com',
    password: 'correcthorsebatterystaple',
  };
  expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
  const user2 = {
    nombre: 'Samuel',
    email: 'samuel@email.com',
    password: 'password',
  };
  expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(
    user2
  );
});

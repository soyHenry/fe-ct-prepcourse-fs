const tieneEmail = require('../ejercicios/14');

test('Debe retornar True si el objetoUsuario posee un valor definido en la propiedad "email"', function () {
  expect(
    tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })
  ).toEqual(true);
});

test('Debe retornar False si el objetoUsuario NO posee un valor definido en la propiedad "email"', function () {
  expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
  expect(tieneEmail({ usernombre: 'Antonio' })).toEqual(false);
});

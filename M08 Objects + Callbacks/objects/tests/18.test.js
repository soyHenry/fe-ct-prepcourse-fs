const agregarAmigo = require('../ejercicios/18');

test('Debe agregar el nuevo amigo al final del arreglo de una propiedad', function () {
  const user = {
    amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
  };
  const newFriend = 'Shay';
  expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
});

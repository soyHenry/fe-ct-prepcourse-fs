const sumarLikesDeUsuario = require('../ejercicios/20');

test('Debe retornar la suma de los likes de todos los post', function () {
  const user = {
    usernombre: 'Jhon Doe',
    password: 'JavaScript es genial!',
    posts: [
      {
        id: '1',
        title: 'Aventuras en JS!',
        likes: 10,
      },
      {
        id: '2',
        title: 'Soy Henry!',
        likes: 100,
      },
      {
        id: '3',
        title: 'Qué es un JavaScript?',
        likes: 35,
      },
      {
        id: '4',
        title: 'JS Objects for Dummies',
        likes: 42,
      },
      {
        id: '5',
        title: 'Educación online',
        likes: 99,
      },
    ],
  };
  expect(sumarLikesDeUsuario(user)).toBe(286);
});

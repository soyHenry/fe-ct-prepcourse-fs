const crearGato = require('../ejercicios/08');

test('Debe crear un nuevo objeto con las propiedades "nombre", y "edad"', function () {
  expect(crearGato('Snowball', 1).nombre).toBe('Snowball');
  expect(crearGato('Snowball', 1).edad).toBe(1);
  expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
  expect(crearGato('Snowball II', 5).edad).toBe(5);
});

test('Debe crear una propiedad "meow" que retorna el string "Meow!"', function () {
  expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
});

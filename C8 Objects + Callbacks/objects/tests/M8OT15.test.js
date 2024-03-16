const tienePropiedad = require('../ejercicios/15');

test('Debe retornar True si el objeto posee una propiedad con el nombre del parámetro', function () {
  const obj = {
    x: true,
  };
  expect(tienePropiedad(obj, 'x')).toEqual(true);
});

test('Debe retornar False si el objeto NO posee una propiedad con el nombre del parámetro', function () {
  const obj = {
    x: true,
  };
  expect(tienePropiedad(obj, 'y')).toEqual(false);
});

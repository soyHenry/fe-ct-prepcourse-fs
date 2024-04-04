const tienenMismaLongitud = require('../ejercicios/12');

test('Debe retornar True si los strings tienen la misma longitud', function () {
  expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
});

test('Debe retornar False si los strings tienen diferente longitud', function () {
  expect(tienenMismaLongitud('hi', 'there')).toBe(false);
});

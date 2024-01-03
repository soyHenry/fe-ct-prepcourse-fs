const tienenMismaLongitud = require('../ejercicios/14');

test('Debe devolver True si los strings tienen la misma longitud', function () {
  expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
});

test('Debe devolver False si los strings tienen la distinta longitud', function () {
  expect(tienenMismaLongitud('hi', 'there')).toBe(false);
});

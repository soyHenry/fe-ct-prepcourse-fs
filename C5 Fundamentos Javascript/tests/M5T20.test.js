const esVocal = require('../ejercicios/20');

test('Debe devolver el string "Dato incorrecto", si el valor ingresado tiene más de una letra', function () {
  expect(esVocal('la')).toBe('Dato incorrecto');
  expect(esVocal('pero')).toBe('Dato incorrecto');
});

test('Debe devolver el string "Dato incorrecto", si el valor ingresado no es vocal', function () {
  expect(esVocal('l')).toBe('Dato incorrecto');
  expect(esVocal('p')).toBe('Dato incorrecto');
});

test('Debe devolver el string "Es vocal", si el valor ingresado lo es', function () {
  expect(esVocal('a')).toBe('Es vocal');
  expect(esVocal('e')).toBe('Es vocal');
  expect(esVocal('i')).toBe('Es vocal');
  expect(esVocal('o')).toBe('Es vocal');
  expect(esVocal('u')).toBe('Es vocal');
});

const multiplicarNumeroDesconocidoPorCinco = require('../ejercicios/12');

test('Debe retornar el numeroMisterioso multiplicado por 5', function () {
  const mysteryBox = {
    numeroMisterioso: 999,
  };
  expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
  mysteryBox.numeroMisterioso = -5;
  expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
});

const esDiezOCinco = require("../ejercicios/10");

test('Debe retornar True si num es 10 o 5', function () {
  expect(esDiezOCinco(10)).toBe(true);
  expect(esDiezOCinco(5)).toBe(true);
});

test('Debe retornar False si num no es 10 o 5', function () {
  expect(esDiezOCinco(11)).toBe(false);
  expect(esDiezOCinco(6)).toBe(false);
  expect(esDiezOCinco(0)).toBe(false);
  expect(esDiezOCinco(5.01)).toBe(false);
});
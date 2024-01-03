const sumarHastaN = require('../ejercicios/19');

test('sumarHastaN suma correctamente hasta 5', () => {
  expect(sumarHastaN(5)).toBe(15);
});

test('sumarHastaN suma correctamente hasta 10', () => {
  expect(sumarHastaN(10)).toBe(55);
});

test('sumarHastaN suma correctamente hasta 1', () => {
  expect(sumarHastaN(1)).toBe(1);
});

test('sumarHastaN suma correctamente hasta 0', () => {
  expect(sumarHastaN(0)).toBe(0);
});

test('sumarHastaN suma correctamente hasta 100', () => {
  expect(sumarHastaN(100)).toBe(5050);
});

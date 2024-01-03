const sumarHastaNConBreak = require('../ejercicios/20.js');

test('sumarHastaNConBreak of 5 should return 15', () => {
  expect(sumarHastaNConBreak(5)).toBe(15);
});

test('sumarHastaNConBreak of 10 should return 55', () => {
  expect(sumarHastaNConBreak(10)).toBe(55);
});

test('sumarHastaNConBreak of 15 should return 120', () => {
  expect(sumarHastaNConBreak(15)).toBe(120);
});

test('sumarHastaNConBreak of 20 should return 120', () => {
  expect(sumarHastaNConBreak(20)).toBe(120);
});

test('sumarHastaNConBreak of 50 should return 1275', () => {
  expect(sumarHastaNConBreak(50)).toBe(1275);
});

test('sumarHastaNConBreak of 100 should return 5050', () => {
  expect(sumarHastaNConBreak(100)).toBe(5050);
});

test('sumarHastaNConBreak of 200 should return 5050', () => {
  expect(sumarHastaNConBreak(200)).toBe(5050);
});

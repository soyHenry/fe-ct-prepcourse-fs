const fizzBuzz = require('../ejercicios/12');

test('Debe retornar "fizzbuzz" si num es divisible por 3 y 5', function () {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('Debe retornar "fizz" si num es divisible por 3', function () {
  expect(fizzBuzz(9)).toBe('fizz');
});

test('Debe retornar "buzz" si num es divisible por 5', function () {
  expect(fizzBuzz(10)).toBe('buzz');
});

test('Debe retornar false si num NO es divisible por 5 ni 3', function () {
  expect(fizzBuzz(4)).toBe(false);
});

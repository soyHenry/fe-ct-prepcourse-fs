const multiplicarArgumentos = require('../ejercicios/19');

test('Debe retornar el producto de los argumentos', function () {
  const product = multiplicarArgumentos(5, 5);
  const product2 = multiplicarArgumentos(10, 0, 10);
  const product3 = multiplicarArgumentos(3, 3, 3, 3);
  expect(product).toBe(25);
  expect(product2).toBe(0);
  expect(product3).toBe(81);
});
test('Debe retornar un solo elemento, cuando hay un solo argumento', function () {
  const product = multiplicarArgumentos(1);
  expect(product).toBe(1);
});
test('Debe retornar 0 cuando no hay argumentos', function () {
  const product = multiplicarArgumentos();
  expect(product).toBe(0);
});

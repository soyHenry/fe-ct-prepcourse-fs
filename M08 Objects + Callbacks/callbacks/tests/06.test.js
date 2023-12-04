const map = require('../ejercicios/06');

test('Debe retornar un arreglo con el resultado de todos los elementos del arreglo pasados por el callback', function () {
  const squares = map([1, 2, 3, 4, 5], function (num) {
    return num * num;
  });
  expect(squares).toEqual([1, 4, 9, 16, 25]);
});

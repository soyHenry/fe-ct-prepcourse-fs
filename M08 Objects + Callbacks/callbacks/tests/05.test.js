const forEach = require('../ejercicios/05');

test('Debe pasarle como argumento cada elemento del arreglo al callback', function () {
  const nums = [];
  forEach([1, 2, 3, 4, 5], function (num) {
    nums.push(num);
  });
  expect(nums).toEqual([1, 2, 3, 4, 5]);
});

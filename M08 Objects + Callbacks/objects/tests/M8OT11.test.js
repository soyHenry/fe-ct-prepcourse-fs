const invocarMetodo = require('../ejercicios/11');

test('Debe invocar el método del objeto', function () {
  const object = {
    x: 0,
    incrementX: function () {
      this.x++;
    },
  };
  invocarMetodo(object, 'incrementX');
  expect(object.x).toBe(1);
});

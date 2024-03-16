const sumarArray = require('../ejercicios/04');

test('Debe sumar todos los números del arreglo y pasarle el resultado como argumento al callback.', function (done) {
  sumarArray([1, 2, 3, 4, 5], function (sum) {
    expect(sum).toBe(15);
    done();
  });
});

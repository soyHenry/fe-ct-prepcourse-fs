const breakStatement = require('../ejercicios/23');

test('Debe retornar un arreglo con los elementos incrementados en dos', function () {
   expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
});

test('La ejecución se debe interrumpir en el caso pedido', function () {
   expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
});

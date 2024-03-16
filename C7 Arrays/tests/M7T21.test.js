const mesesDelAño = require('../ejercicios/21');

var ok = [
   'Marzo',
   'Diciembre',
   'Abril',
   'Junio',
   'Julio',
   'Noviembre',
   'Enero',
   'Mayo',
   'Febrero',
];
var notOk = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];
test('Debe retornar un arreglo con los meses requeridos', function () {
   expect(mesesDelAño(ok)).toEqual(['Marzo', 'Noviembre', 'Enero']);
});

test('Debe retornar el mensaje si alguno de los meses no se encuentra en el arreglo', function () {
   expect(mesesDelAño(notOk)).toEqual('No se encontraron los meses pedidos');
});

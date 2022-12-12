/* eslint-disable no-undef */
const {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
} = require('../homework');

describe('JAVASCRIPT VI', function () {
   describe('mayuscula(nombre)', function () {
      it('Debe retornar el mismo nombre, pero con la primera letra en mayúscula', function () {
         expect(mayuscula('mario')).toBe('Mario');
         expect(mayuscula('ana')).toBe('Ana');
      });
   });

   describe('invocarCallback(cb)', function () {
      it('Debe invocar/ejecutar el callback', function () {
         const cb = jest.fn();
         invocarCallback(cb);
         expect(cb).toHaveBeenCalled();
      });
   });

   describe('operacionMatematica(n1, n2, cb)', function () {
      it('Debe retornar el resultado del callback habiéndole pasado como arguemnto los números recibidos.', function () {
         const cb = jest.fn();
         operacionMatematica(100, 20, cb);
         expect(cb).toHaveBeenCalled();
      });
   });

   describe('sumarArray(arrayOfNumbers, cb)', function () {
      it('Debe sumar todos los números del arreglo y pasarle el resultado como argumento al callback.', function (done) {
         sumarArray([1, 2, 3, 4, 5], function (sum) {
            expect(sum).toBe(15);
            done();
         });
      });
   });

   describe('forEach(array, cb)', function () {
      it('Debe pasarle como argumento cada elemento del arreglo al callback', function () {
         const nums = [];
         forEach([1, 2, 3, 4, 5], function (num) {
            nums.push(num);
         });
         expect(nums).toEqual([1, 2, 3, 4, 5]);
      });
   });

   describe('map(array, cb)', function () {
      it('Debe retornar un arreglo con el resultado de todos los elementos del arreglo pasados por el callback', function () {
         const squares = map([1, 2, 3, 4, 5], function (num) {
            return num * num;
         });
         expect(squares).toEqual([1, 4, 9, 16, 25]);
      });
   });

   describe('filter(arrayOfStrings)', function () {
      it('Debe retornar un arreglo con todos los elementos que comiencen con la letra "a"', function () {
         var array = [
            'abajo',
            'pera',
            'escalera',
            'alerta',
            'indice',
            'azteca',
            'arbol',
            'buzo',
         ];
         expect(filter(array)).toEqual(['abajo', 'alerta', 'azteca', 'arbol']);
      });
   });
});

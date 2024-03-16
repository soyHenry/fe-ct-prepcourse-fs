const actualizarValorPropiedad = require('../ejercicios/02');

describe('actualizarValorPropiedad', () => {
   test('should update the value of an existing property', () => {
      const obj = { foo: 'bar' };
      const result = actualizarValorPropiedad(obj, 'foo', 'baz');
      expect(result).toEqual({ foo: 'baz' });
   });

   test('should add a new property if it does not exist', () => {
      const obj = { foo: 'bar' };
      const result = actualizarValorPropiedad(obj, 'baz', 42);
      expect(result).toEqual({ foo: 'bar', baz: 42 });
   });
});

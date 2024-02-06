const combine = require('../ejercicios/22');

// describe('diasEnMes', () => {
//   it('should return 31 for January', () => {
//     expect(diasEnMes(1)).toBe(31);
//   });

//   it('should return 28 for February', () => {
//     expect(diasEnMes(2)).toBe(28);
//   });

//   it('should return 30 for April', () => {
//     expect(diasEnMes(4)).toBe(30);
//   });

//   it('should return 0 for month outside of range', () => {
//     expect(diasEnMes(13)).toBe(0);
//   });

//   it('should return 0 for month outside of range', () => {
//     expect(diasEnMes(-1)).toBe(0);
//   });
// });

describe('combine', () => {
   test('Debe combinar los caracteres de forma alternada si hay un string vacío', () => {
      expect(combine('abc', '', '123')).toBe('a1b2c3');
      expect(combine('abc', '12345', '')).toBe('a1b2c345');
   });

   test('Debe combinar correctamente los resultas si los strings tienen diferente tamaño', () => {
      expect(combine('abc', '12345', '')).toBe('a1b2c345');
      expect(combine('a', '12', 'xyz')).toBe('a1x2yz');
   });

   test('Debe retornar un string vacío si todos los strings están vacíos', () => {
      expect(combine('', '', '')).toBe('');
   });

   test('De procesar strings de tamaño 1 correctamente', () => {
      expect(combine('a', 'b', 'c')).toBe('abc');
   });

   test('Debe retornar el resultado correcto si cualquier string está vacío', () => {
      expect(combine('abc', '', '')).toBe('abc');
      expect(combine('', '123', '')).toBe('123');
      expect(combine('', '', 'xyz')).toBe('xyz');
   });
});

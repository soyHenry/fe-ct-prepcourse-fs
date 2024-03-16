const duplicarElementos = require('../ejercicios/11.js');

describe('duplicarElementos', () => {
   it('should return an array with each element multiplied by 2', () => {
      expect(duplicarElementos([1, 2, 3])).toEqual([2, 4, 6]);
      expect(duplicarElementos([0, 4, 8])).toEqual([0, 8, 16]);
      expect(duplicarElementos([-1, -2, -3])).toEqual([-2, -4, -6]);
   });

   it('should return an empty array if the input array is empty', () => {
      expect(duplicarElementos([])).toEqual([]);
   });
});

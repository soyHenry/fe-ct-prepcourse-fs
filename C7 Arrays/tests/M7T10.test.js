const obtenerPrimerStringLargo = require('../ejercicios/10');

describe('obtenerPrimerStringLargo', () => {
   it('should return the first string with more than 5 characters', () => {
      expect(
         obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'test'])
      ).toBe('hello');
      expect(
         obtenerPrimerStringLargo([
            'this',
            'is',
            'a',
            'test',
            'with',
            'a',
            'long',
            'string',
         ])
      ).toBe('string');
   });

   it('should return undefined if no string with more than 5 characters is found', () => {
      expect(
         obtenerPrimerStringLargo(['hi', 'there', 'how', 'are', 'you'])
      ).toBeUndefined();
      expect(
         obtenerPrimerStringLargo(['this', 'is', 'a', 'test'])
      ).toBeUndefined();
   });
});

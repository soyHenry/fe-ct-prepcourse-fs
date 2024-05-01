const encontrarPrimerMultiploDeN = require('../ejercicios/26');

test('should return the first multiple of 3 in the sequence', () => {
   const secuencia = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const n = 3;
   const expected = 3;
   const result = encontrarPrimerMultiploDeN(n, secuencia);
   expect(result).toBe(expected);
});

test('should return the first multiple of 5 in the sequence', () => {
   const secuencia = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const n = 5;
   const expected = 5;
   const result = encontrarPrimerMultiploDeN(n, secuencia);
   expect(result).toBe(expected);
});

test('should return undefined if no multiple is found', () => {
   const secuencia = [1, 2, 3, 4, 5, 6 ];
   const n = 7;
   const expected = undefined;
   const result = encontrarPrimerMultiploDeN(n, secuencia);
   expect(result).toBe(expected);
});

test('should return the first multiple of 2 in the sequence', () => {
   const secuencia = [2, 4, 6, 8, 10];
   const n = 2;
   const expected = 2;
   const result = encontrarPrimerMultiploDeN(n, secuencia);
   expect(result).toBe(expected);
});

test('should return the first multiple of 7 in the sequence', () => {
   const secuencia = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
   ];
   const n = 7;
   const expected = 7;
   const result = encontrarPrimerMultiploDeN(n, secuencia);
   expect(result).toBe(expected);
});

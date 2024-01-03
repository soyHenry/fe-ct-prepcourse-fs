const esPositivoOInferiorA10 = require('../ejercicios/08');

test('returns true for numbers less than 10 and positive', () => {
   expect(esPositivoOInferiorA10(5)).toBe(true);
   expect(esPositivoOInferiorA10(9)).toBe(true);
   expect(esPositivoOInferiorA10(0)).toBe(true);
   expect(esPositivoOInferiorA10(11)).toBe(false);
   expect(esPositivoOInferiorA10(-5)).toBe(false);
   expect(esPositivoOInferiorA10(100)).toBe(false);
});

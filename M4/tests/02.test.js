// BEGIN: j8d5f4h3d9f2
const esVerdaderoYFalso = require("../ejercicios/02");

test("ambos verdaderos", () => {
  expect(esVerdaderoYFalso(true, true)).toBe(true);
});

test("uno verdadero y otro falso", () => {
  expect(esVerdaderoYFalso(true, false)).toBe(false);
  expect(esVerdaderoYFalso(false, true)).toBe(false);
});

test("ambos falsos", () => {
  expect(esVerdaderoYFalso(false, false)).toBe(false);
});
// END: j8d5f4h3d9f2

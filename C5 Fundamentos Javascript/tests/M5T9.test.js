const esNuloOIndefinido = require("../ejercicios/09");

test('"null" debe retornar true', () => {
  expect(esNuloOIndefinido(null)).toBe(true);
});

test('"undefined" debe retornar true', () => {
  expect(esNuloOIndefinido(undefined)).toBe(true);
});

test('"0" debe retornar false', () => {
  expect(esNuloOIndefinido(0)).toBe(false);
});

test('"false" debe retornar false', () => {
  expect(esNuloOIndefinido(false)).toBe(false);
});

test('un string vacio debe retornar false', () => {
  expect(esNuloOIndefinido("")).toBe(false);
});

test('un objeto debe retornar false', () => {
  expect(esNuloOIndefinido({})).toBe(false);
});

test('un arreglo debe retornar false', () => {
  expect(esNuloOIndefinido([])).toBe(false);
});
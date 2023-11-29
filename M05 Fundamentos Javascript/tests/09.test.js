const esNuloOIndefinido = require("../ejercicios/09");

test("null should return true", () => {
  expect(esNuloOIndefinido(null)).toBe(true);
});

test("undefined should return true", () => {
  expect(esNuloOIndefinido(undefined)).toBe(true);
});

test("0 should return false", () => {
  expect(esNuloOIndefinido(0)).toBe(false);
});

test("false should return false", () => {
  expect(esNuloOIndefinido(false)).toBe(false);
});

test("an empty string should return false", () => {
  expect(esNuloOIndefinido("")).toBe(false);
});

test("an object should return false", () => {
  expect(esNuloOIndefinido({})).toBe(false);
});

test("an array should return false", () => {
  expect(esNuloOIndefinido([])).toBe(false);
});
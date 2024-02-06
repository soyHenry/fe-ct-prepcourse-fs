const esNumeroPrimo = require("../ejercicios/33");

test("2 es un número primo", () => {
  expect(esNumeroPrimo(2)).toBe(true);
});

test("3 es un número primo", () => {
  expect(esNumeroPrimo(3)).toBe(true);
});

test("4 no es un número primo", () => {
  expect(esNumeroPrimo(4)).toBe(false);
});

test("5 es un número primo", () => {
  expect(esNumeroPrimo(5)).toBe(true);
});

test("6 no es un número primo", () => {
  expect(esNumeroPrimo(6)).toBe(false);
});

test("7 es un número primo", () => {
  expect(esNumeroPrimo(7)).toBe(true);
});

test("8 no es un número primo", () => {
  expect(esNumeroPrimo(8)).toBe(false);
});

test("9 no es un número primo", () => {
  expect(esNumeroPrimo(9)).toBe(false);
});

test("10 no es un número primo", () => {
  expect(esNumeroPrimo(10)).toBe(false);
});

test("11 es un número primo", () => {
  expect(esNumeroPrimo(11)).toBe(true);
});
const invertir = require("../ejercicios/04");

test("Invertir una palabra", () => {
  expect("hola".invertir()).toBe("aloh");
});

test("Invertir una frase", () => {
  expect("Hola mundo".invertir()).toBe("odnum aloH");
});

test("Invertir un string vacío", () => {
  expect("".invertir()).toBe("");
});

test("Invertir un string de un solo caracter", () => {
  expect("a".invertir()).toBe("a");
});

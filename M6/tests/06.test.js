const contarPropiedades = require("../ejercicios/06.js");

test("contarPropiedades counts the number of properties in an object", () => {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { name: "John", age: 30, city: "New York" };
  const obj3 = { 1: "one", 2: "two", 3: "three", 4: "four" };
  const obj4 = {};

  expect(contarPropiedades(obj1)).toBe(3);
  expect(contarPropiedades(obj2)).toBe(3);
  expect(contarPropiedades(obj3)).toBe(4);
  expect(contarPropiedades(obj4)).toBe(0);
});

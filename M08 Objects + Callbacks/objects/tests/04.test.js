const verificarPropiedad = require("../ejercicios/04");

test("verificarPropiedad returns true for existing property", () => {
  const obj = { name: "John", age: 30 };
  expect(verificarPropiedad(obj, "name")).toBe(true);
});

test("verificarPropiedad returns false for non-existing property", () => {
  const obj = { name: "John", age: 30 };
  expect(verificarPropiedad(obj, "address")).toBe(false);
});

test("verificarPropiedad returns true for inherited property", () => {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.address = "123 Main St";
  const john = new Person("John", 30);
  expect(verificarPropiedad(john, "address")).toBe(true);
});

test("verificarPropiedad returns false for non-enumerable property", () => {
  const obj = {};
  Object.defineProperty(obj, "name", {
    value: "John",
    enumerable: false,
  });
  expect(verificarPropiedad(obj, "name")).toBe(false);
});

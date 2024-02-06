const agregarNuevaPropiedad = require("../ejercicios/03");

test("adds a new property to the object", () => {
  const obj = { name: "John", age: 30 };
  agregarNuevaPropiedad(obj, "city", "New York");
  expect(obj).toEqual({ name: "John", age: 30, city: "New York" });
});

test("returns the modified object", () => {
  const obj = { name: "John", age: 30 };
  const result = agregarNuevaPropiedad(obj, "city", "New York");
  expect(result).toEqual({ name: "John", age: 30, city: "New York" });
});

test("adds a new property with a boolean value", () => {
  const obj = { name: "John", age: 30 };
  agregarNuevaPropiedad(obj, "isMarried", true);
  expect(obj).toEqual({ name: "John", age: 30, isMarried: true });
});

test("adds a new property with a null value", () => {
  const obj = { name: "John", age: 30 };
  agregarNuevaPropiedad(obj, "job", null);
  expect(obj).toEqual({ name: "John", age: 30, job: null });
});

// BEGIN: q3r5t6y7u8i9
const esMayorDeEdad = require("../ejercicios/09");

test("18 años cumplidos", () => {
  const fechaNacimiento = new Date("2003-01-01");
  expect(esMayorDeEdad(fechaNacimiento)).toBe(true);
});

test("Menor de edad", () => {
  const fechaNacimiento = new Date("2010-01-01");
  expect(esMayorDeEdad(fechaNacimiento)).toBe(false);
});

test("Mayor de edad por un día", () => {
  const fechaNacimiento = new Date("2003-12-31");
  expect(esMayorDeEdad(fechaNacimiento)).toBe(true);
});

test("Fecha de nacimiento en el futuro", () => {
  const fechaNacimiento = new Date("2025-01-01");
  expect(esMayorDeEdad(fechaNacimiento)).toBe(false);
});
// END: q3r5t6y7u8i9

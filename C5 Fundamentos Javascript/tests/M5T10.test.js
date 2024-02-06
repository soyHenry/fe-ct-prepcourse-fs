const esFechaValida = require("../ejercicios/10");

describe("esFechaValida", () => {
  test("should return true for a valid date", () => {
    expect(esFechaValida(new Date("2022-01-01"))).toBe(true);
  });

  test("should return false for an invalid date", () => {
    expect(esFechaValida("2022-01-01")).toBe(false);
  });

  test("should return false for an invalid date object", () => {
    expect(esFechaValida(new Date("invalid"))).toBe(false);
  });
});
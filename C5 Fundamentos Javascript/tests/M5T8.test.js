const esNumeroEntero = require("../ejercicios/08");

describe("esNumeroEntero", () => {
  it("should return true for integer numbers", () => {
    expect(esNumeroEntero(0)).toBe(true);
    expect(esNumeroEntero(1)).toBe(true);
    expect(esNumeroEntero(-1)).toBe(true);
    expect(esNumeroEntero(42)).toBe(true);
    expect(esNumeroEntero(1000000)).toBe(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(esNumeroEntero(0.5)).toBe(false);
    expect(esNumeroEntero(1.2)).toBe(false);
    expect(esNumeroEntero(-3.14)).toBe(false);
    expect(esNumeroEntero(42.0001)).toBe(false);
    expect(esNumeroEntero(1000000.01)).toBe(false);
  });

  it("should return false for non-number values", () => {
    expect(esNumeroEntero("42")).toBe(false);
    expect(esNumeroEntero(NaN)).toBe(false);
    expect(esNumeroEntero(undefined)).toBe(false);
    expect(esNumeroEntero(null)).toBe(false);
    expect(esNumeroEntero({})).toBe(false);
    expect(esNumeroEntero([])).toBe(false);
    expect(esNumeroEntero(() => {})).toBe(false);
  });
});
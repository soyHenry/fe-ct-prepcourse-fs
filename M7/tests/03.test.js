const duplicar = require("../ejercicios/03");

describe("duplicar", () => {
  it("should return an array with all elements doubled", () => {
    const arr = [1, 2, 3];
    const expected = [2, 4, 6];
    const result = arr.duplicar();
    expect(result).toEqual(expected);
  });

  it("should return an empty array when called on an empty array", () => {
    const arr = [];
    const expected = [];
    const result = arr.duplicar();
    expect(result).toEqual(expected);
  });

  it("should return an array with negative numbers doubled", () => {
    const arr = [-1, -2, -3];
    const expected = [-2, -4, -6];
    const result = arr.duplicar();
    expect(result).toEqual(expected);
  });

  it("should return an array with decimal numbers doubled", () => {
    const arr = [0.5, 1.5, 2.5];
    const expected = [1, 3, 5];
    const result = arr.duplicar();
    expect(result).toEqual(expected);
  });
});

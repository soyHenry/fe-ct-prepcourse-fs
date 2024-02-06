const cambiarCadena = require("../ejercicios/02");

describe("cambiarCadena function", () => {
  it("should apply the callback function to the string and return the result", () => {
    const callback = (str) => str.toUpperCase();
    expect(cambiarCadena("hello world", callback)).toBe("HELLO WORLD");
  });

  it("should return the original string if the callback function is not provided", () => {
    expect(cambiarCadena("hello world")).toBe("hello world");
  });

  it("should return an empty string if an empty string is provided", () => {
    const callback = (str) => str.toUpperCase();
    expect(cambiarCadena("", callback)).toBe("");
  });
});

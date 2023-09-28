const Coche = require("../ejercicios/01");

describe("Coche", () => {
  let coche;

  beforeEach(() => {
    coche = new Coche("Toyota", "Corolla", 2021);
  });

  it("should have a marca property", () => {
    expect(coche.marca).toEqual("Toyota");
  });

  it("should have a modelo property", () => {
    expect(coche.modelo).toEqual("Corolla");
  });

  it("should have an año property", () => {
    expect(coche.año).toEqual(2021);
  });

  it("should have an arrancar method", () => {
    expect(coche.arrancar()).toEqual("Arrancando");
  });

  it("should have a detener method", () => {
    expect(coche.detener()).toEqual("Deteniendo");
  });
});

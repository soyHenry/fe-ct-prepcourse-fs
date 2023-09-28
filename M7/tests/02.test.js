const Libro = require("../ejercicios/02");

describe("Libro", () => {
  const libro = new Libro("El Quijote", "Miguel de Cervantes", 1605);

  it("should have a title property", () => {
    expect(libro.titulo).toBe("El Quijote");
  });

  it("should have an author property", () => {
    expect(libro.autor).toBe("Miguel de Cervantes");
  });

  it("should have a year property", () => {
    expect(libro.año).toBe(1605);
  });

  it("should have an obtenerResumen method", () => {
    expect(libro.obtenerResumen()).toBe(
      "El Quijote fue escrito por Miguel de Cervantes en el año 1605"
    );
  });

  it("should have an obtenerAutor method", () => {
    expect(libro.obtenerAutor()).toBe("Miguel de Cervantes");
  });
});

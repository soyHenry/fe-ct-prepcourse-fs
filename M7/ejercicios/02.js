// CrearClaseLibro: Crea una clase llamada Libro con propiedades como titulo, autor y año, y métodos como obtenerResumen y obtenerAutor.
// El método obtenerResumen debe devolver el string "titulo fue escrito por autor en el año año".
// El método obtenerAutor debe devolver el autor del libro.
// Las propiedades titulo, autor y año deben pasarse por parámetro en el constructor.

class Libro {
  constructor(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }

  obtenerResumen() {
    return `${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`;
  }

  obtenerAutor() {
    return this.autor;
  }
}

module.exports = Libro;

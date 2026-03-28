function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades indicadas.
  // Tu codigo:
  return {
    nombre,
    edad,
    meow() {
      return 'Meow!';
    },
  };
}

module.exports = crearGato;

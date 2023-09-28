// CrearClaseCoche: Crea una clase llamada Coche con propiedades como marca, modelo y año, y métodos arrancar y detener.
// El método arrancar debe devolver el string "Arrancando".
// El método detener debe devolver el string "Deteniendo".
// Las propiedades marca, modelo y año deben pasarse por parámetro en el constructor.

class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  arrancar() {
    return "Arrancando";
  }

  detener() {
    return "Deteniendo";
  }
}

module.exports = Coche;

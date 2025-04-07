
var objeto = {
  prop1: "valor1",
  prop2: "valor2"
}
const agregarNuevaPropiedad = (objeto, propiedad, valor) => {

  objeto [propiedad] = valor

  return objeto
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
};

module.exports = agregarNuevaPropiedad;
console.log (agregarNuevaPropiedad (objeto, "PropiedadNueva", "NuevoValor"))

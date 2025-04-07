var objeto = {
  prop1: "Valor1",
  prop2: "valor2",
}

const listarPropiedades = (objeto) => {

  a = Object.keys (objeto)

  return a
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
};

module.exports = listarPropiedades;
console.log (listarPropiedades (objeto))
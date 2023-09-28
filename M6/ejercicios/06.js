// contarPropiedades: Crea una función que reciba un objeto y cuente cuántas propiedades tiene utilizando un bucle for-in.

const contarPropiedades = (objeto) => {
  let contador = 0;
  for (const propiedad in objeto) {
    contador++;
  }
  return contador;
};

module.exports = contarPropiedades;

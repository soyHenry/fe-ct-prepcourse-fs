// objetoAnidado: Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando this.

const objetoAnidado = {
  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: {
    propiedad4: "valor4",
    propiedad5: "valor5",
    propiedad6: {
      propiedad7: "valor7",
      propiedad8: "valor8",
      propiedad9: function () {
        return this.propiedad7;
      },
    },
  },
};

module.exports = objetoAnidado;

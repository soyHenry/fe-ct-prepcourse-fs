
var objeto = {

   porp1: "valor1",
   prop2: "valor2",
   prop3: "valor3",
}

function actualizarValorPropiedad(objeto, propiedad, valor) {
   
   objeto[propiedad] = valor;
   return objeto;

   
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
}

module.exports = actualizarValorPropiedad;

console.log (actualizarValorPropiedad (objeto, "prop3", "Nuevo Valor"))
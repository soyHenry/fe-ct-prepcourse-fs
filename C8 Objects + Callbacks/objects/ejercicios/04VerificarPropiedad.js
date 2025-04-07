var objeto = {
   prop1: "Valor1"
}

function verificarPropiedad(objeto, propiedad) {

   var a = objeto.hasOwnProperty (propiedad)

   if (a) return true
   else return false
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
}

module.exports = verificarPropiedad;
console.log (verificarPropiedad (objeto, "prop1"))
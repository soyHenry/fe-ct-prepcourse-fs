const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   //let a = objeto.propiedad > funciona, pero el ejercicio pide bracket notation.
   const a = objeto[propiedad]; 
   return a;
};

module.exports = obtenerValorPropiedad;

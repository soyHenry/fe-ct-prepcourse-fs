
let array = [1,2,3,4,3,5,6,2,7,6,5,4,5,6,7,8,9,6,4,3,0];
console.log (Math.random(), array.length-1);
// let largoarreglo = array.length;
var posicion = Math.trunc (Math.random()*(array.length-1));
console.log (posicion);

function obtenerElementoAleatorio(array) {

  return array [posicion];
   

   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
}

module.exports = obtenerElementoAleatorio;
console.log (obtenerElementoAleatorio(array));

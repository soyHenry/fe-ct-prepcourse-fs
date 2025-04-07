var arreglodenumeros = [1,2,3,4,5,6,7,8,9]

function sumarArray(arrayOfNumbers, cb) {

return cb (arrayOfNumbers)
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
}


function sumaarreglos (arreglosparasumar) {

   var sumatotal = 0
 for (i=0; i<arreglosparasumar.length; i++){

   sumatotal += arreglosparasumar[i]

}
return sumatotal
}

module.exports = sumarArray;

console.log (sumarArray(arreglodenumeros, sumaarreglos))
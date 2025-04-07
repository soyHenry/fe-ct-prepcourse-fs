
var arreglo = [1,2,3,4,5,6,7,8,9,1,2,3,4,3,4,5,6,7,8]

function contarParesConContinue(numeros) {
  
  var nuevoarray = []
  
  for (i=0;i<numeros.length;i++){

    if (numeros [i] % 2 === 0)

      nuevoarray.push (numeros[i])
       else continue
  }
  return nuevoarray
  
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
}

module.exports = contarParesConContinue;
console.log (contarParesConContinue (arreglo), "Largo arreglo: "+arreglo.length, "Largo NuevoArrPar: "+contarParesConContinue(arreglo).length)
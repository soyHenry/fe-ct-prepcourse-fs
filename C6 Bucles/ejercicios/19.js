
function sumarHastaN(n) {

  // for (var i=0; i<=n; i++)

  //   suma = suma + i;
var i=1;
var suma =0;

  do {
    suma = suma+i;
    i = i+1;
  } while (i<=n);

    return suma;

    // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
}

module.exports = sumarHastaN;
console.log (sumarHastaN(5));

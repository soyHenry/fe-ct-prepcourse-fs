// sumarHastaN: Crea una función que reciba un número N y devuelva la suma de todos los números desde 1 hasta N.

function sumarHastaN(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

module.exports = sumarHastaN;

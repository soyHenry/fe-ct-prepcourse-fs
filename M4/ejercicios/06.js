// productoEntreNúmeros: Crea una función que reciba dos números, A y B, y devuelva el producto de todos los números entre A y B (inclusive).

function productoEntreNúmeros(a, b) {
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;
}

module.exports = productoEntreNúmeros;

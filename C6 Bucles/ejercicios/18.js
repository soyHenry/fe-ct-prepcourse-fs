function productoEntreNumeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los numeros entre a y b (inclusive).
  // Tu codigo:
  if (a <= 0 && b >= 0) return 0;

  let producto = 1;
  for (let i = a; i <= b; i += 1) {
    producto *= i;
  }
  return producto;
}

module.exports = productoEntreNumeros;

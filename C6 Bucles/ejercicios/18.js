function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if(a===b) return a;
  let prod = a;
  while (a!=b) {
    prod = prod * (a+1)
    a++
  }
  if(prod == -0) return 0;
  return prod;
}

module.exports = productoEntreNúmeros;
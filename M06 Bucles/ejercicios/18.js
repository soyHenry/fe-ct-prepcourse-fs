function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var acumulador = 1
    for (i = a; i <= b; i++){
      acumulador = acumulador * i
    }
    if (Math.min (a, b) <= 0)return 0;
    return acumulador;

  }

module.exports = productoEntreNúmeros;
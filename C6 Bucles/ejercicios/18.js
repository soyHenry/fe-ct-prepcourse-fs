function productoEntreNúmeros(a, b) {

 var producto = 1;
  if (b>a)
    for (var i = a; i<=b; i++)
      producto = producto*i;
    else if (a>b)
    for (var i = b; i<=a; i++)
      producto = producto*i;
    else producto = a*b;
return (producto);    

  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
}

module.exports = productoEntreNúmeros;
console.log (productoEntreNúmeros (2,10));
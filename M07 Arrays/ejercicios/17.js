function tablaDelSeis() {
  var tabla = [];

  // Iteramos desde 0 hasta 10, multiplicando cada número por 6
  for (var i = 0; i <= 10; i++) {
    tabla.push(i * 6); // Agregamos el resultado al array 'tabla'
  }

  return tabla;
}

// Ejemplo de uso:
console.log(tablaDelSeis()); // Devuelve [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]

module.exports = tablaDelSeis;

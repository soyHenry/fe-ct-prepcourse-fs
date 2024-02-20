function tablaDelSeis() {
  var tabla = []; // Arreglo para almacenar la tabla de multiplicar del 6
  
  // Iterar desde 0 hasta 10 (inclusive) para generar los resultados de la tabla de multiplicar
  for (var i = 0; i <= 10; i++) {
    var resultado = 6 * i + 2; // Calcular el resultado de la multiplicación y sumar 2
    
    // Agregar el resultado al arreglo
    tabla.push(resultado);
  }
  
  return tabla; // Devolver el arreglo con los resultados de la tabla de multiplicar del 6 incrementados en dos
}


module.exports = tablaDelSeis;

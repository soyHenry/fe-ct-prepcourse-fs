function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu codigo:
  const resultados = [];
  for (let i = 0; i <= 10; i += 1) {
    resultados.push(i * 6);
  }
  return resultados;
}

module.exports = tablaDelSeis;

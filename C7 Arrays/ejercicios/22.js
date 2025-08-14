function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaSeis = [];
  for(let i = 0; i <= 10; i++){
    let multi = 0;
    multi = i * 6;
    tablaSeis.push(multi)
  }
  return tablaSeis;
}

module.exports = tablaDelSeis;

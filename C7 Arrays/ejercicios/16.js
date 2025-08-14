function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multiplicado = [];
  for(let i = 0; i < array.length; i++){
    multiplicado.push(i * array[i])
  }
  return multiplicado;
}

module.exports = multiplicarElementosPorIndice;

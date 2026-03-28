function sort(sortBy, list) {
  // Devuelve la lista de objetos ordenada de forma descendiente a partir de la letra recibida.
  // Tu codigo:
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

module.exports = sort;

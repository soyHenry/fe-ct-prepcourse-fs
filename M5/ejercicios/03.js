// encontrarElemento: Crea una función que busque un elemento en un array y devuelva su índice. Si no lo encuentra, devuelve -1.

function encontrarElemento(elemento, array) {
  for (let i = 0; i < array.length; i++) {
    if (elemento === array[i]) {
      return i;
    }
  }
  return -1;
}

module.exports = encontrarElemento;

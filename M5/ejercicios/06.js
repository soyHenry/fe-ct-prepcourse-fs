// duplicarElementos: Crea una función que duplique (multiplique x2) cada elemento de un array de números.

function duplicarElementos(array) {
  let duplicados = [];
  for (let i = 0; i < array.length; i++) {
    duplicados.push(array[i] * 2);
  }
  return duplicados;
}

module.exports = duplicarElementos;

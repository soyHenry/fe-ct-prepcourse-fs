// encontrarElementoRepetido: Crea una función que encuentre el primer elemento repetido en un array.

function encontrarElementoRepetido(numeros) {
  const numerosOrdenados = numeros.sort((a, b) => a - b);
  for (let i = 0; i < numerosOrdenados.length; i++) {
    if (numerosOrdenados[i] === numerosOrdenados[i + 1]) {
      return numerosOrdenados[i];
    }
  }
}

module.exports = encontrarElementoRepetido;

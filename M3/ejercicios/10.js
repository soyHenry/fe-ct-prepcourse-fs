// encontrarNumeroFaltante: Crea una función que encuentre el número faltante en una secuencia de números enteros consecutivos.

function encontrarNumeroFaltante(numeros) {
  const numerosOrdenados = numeros.sort((a, b) => a - b);
  for (let i = 0; i < numerosOrdenados.length; i++) {
    if (numerosOrdenados[i] !== i + 1) {
      return i + 1;
    }
  }
}

module.exports = encontrarNumeroFaltante;

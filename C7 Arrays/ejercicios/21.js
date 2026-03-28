function mesesDelAno(array) {
  // El array contiene algunos meses del ano desordenados.
  // Tu codigo:
  const meses = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'Marzo' || array[i] === 'Noviembre' || array[i] === 'Enero') {
      meses.push(array[i]);
    }
  }
  return meses.length === 3 ? meses : 'No se encontraron los meses pedidos';
}

module.exports = mesesDelAno;

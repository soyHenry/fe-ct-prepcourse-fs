function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el numero num recibido hasta un limite de 10 veces.
  // Tu codigo:
  const resultados = [];
  for (let i = 1; i <= 10; i += 1) {
    num += 2;
    if (num === i) return 'Se interrumpió la ejecución';
    resultados.push(num);
  }
  return resultados;
}

module.exports = breakStatement;

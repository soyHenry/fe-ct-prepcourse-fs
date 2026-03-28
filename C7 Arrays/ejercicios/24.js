function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el numero num recibido hasta un limite de 10 veces.
  // Tu codigo:
  const resultados = [];
  for (let i = 1; i <= 10; i += 1) {
    if (i === 5) continue;
    num += 2;
    resultados.push(num);
  }
  return resultados;
}

module.exports = continueStatement;

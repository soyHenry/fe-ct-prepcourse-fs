// contarParesConContinue: Crea una función que cuente cuántos números pares hay en un array y devuelva ese número, utilizando continue para evitar contar los impares.

function contarParesConContinue(numeros) {
  let pares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      continue;
    }
    pares++;
  }
  return pares;
}

module.exports = contarParesConContinue;

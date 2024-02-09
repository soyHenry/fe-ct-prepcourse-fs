function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  //Mi solucion sin bucle

  if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
    return true;
  }

  if  (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    return false;
  } else if  (numero % numero === 0 || numero % 1 === 0){
    return true;
  }
}

module.exports = esNumeroPrimo;

function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let dividendo = [3, 5, 7]
  if (numero == 2) return true;
  if (numero % 2 == 0) return false;
  for (let i = 0; i < dividendo.length; i++){
  if (numero == dividendo[i]) return true;
  if (numero % dividendo[i] == 0) return false;
}
return true;
}

module.exports = esNumeroPrimo;

function esNumeroPrimo(numero) {

  // si numero % i === 0 es divisible
  if (numero<=1) return "El numero no es primo"

  for (var i=2; i<numero; i++){
    if (numero % i === 0 && i != numero)
      return "El numero no es primo"
    

  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
}
return "Numero primo"
}

module.exports = esNumeroPrimo;
console.log (esNumeroPrimo(15));
console.log (Math.sqrt (21));
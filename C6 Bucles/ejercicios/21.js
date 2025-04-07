function esPotenciaDeDos(numero) {

while (numero % 2 === 0){
    numero = numero / 2;
  }
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
if (numero===1) return "Potencia de 2" 
else return "No es potencia de 2"
}

module.exports = esPotenciaDeDos;
console.log (esPotenciaDeDos(129));
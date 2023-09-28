// esPotenciaDeDos: Crea una función que reciba un número y determine si es una potencia de 2 utilizando un bucle while. Debería devolver true si es potencia de 2, false si no.

function esPotenciaDeDos(numero) {
  let potencia = 1;
  while (potencia < numero) {
    potencia = potencia * 2;
  }
  return potencia === numero;
}

module.exports = esPotenciaDeDos;

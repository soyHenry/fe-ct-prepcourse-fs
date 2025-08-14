function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  switch (true) {
    case num % 3 == 0 && num % 5 == 0:
      return "fizzbuzz"
      break;
    case num % 3 == 0:
      return "fizz";
      break;
    case num % 5 == 0:
      return "buzz"
      break;
    default:
      return false;
      break;
  }
}

module.exports = fizzBuzz;

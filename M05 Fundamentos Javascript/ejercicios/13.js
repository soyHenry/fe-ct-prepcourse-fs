function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  if (x === y && y === x){
    return true;
  } else {
    return false;
  }
}

module.exports = sonIguales;
function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  if (valor === null || typeof (valor) === "undefined") {
    return true;
  } else {
    return false;
  }
}

module.exports = esNuloOIndefinido;
function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x < y && x != y) return y;
  else if (x > y && x != y)return x;
  else if (x ===y)return x;
}

module.exports = obtenerMayor;

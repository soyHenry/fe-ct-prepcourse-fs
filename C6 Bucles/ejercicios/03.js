function obtenerMayor(x, y) {
  
  
  if (Number.isInteger(x) && Number.isInteger(y))
    if (x>y) 
      return (x)
    else return (y)
    else return ("Los numeros deben ser enteros")
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
}
console.log (obtenerMayor(.1,3));

module.exports = obtenerMayor;

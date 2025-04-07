
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // Ejemplo de secuencia completa
var num1 = [];  // Ejemplo de arreglo vacío

function encontrarNumeroFaltante(numeros) {
  // Si el arreglo está vacío, devolvemos null
  if (numeros.length === 0) return null;

  // Recorremos el arreglo buscando el número faltante
  for (let i = 0; i < numeros.length - 1; i++) {
    // Si la diferencia entre el número actual y el siguiente no es 1, encontramos el número faltante
    if (numeros[i + 1] !== numeros[i] + 1) {
      return numeros[i] + 1;
    }
  }
  
  // Si no se encontró ningún número faltante, devolvemos null
  return null;
}

module.exports = encontrarNumeroFaltante;
console.log(encontrarNumeroFaltante(num));  // Debería retornar null, ya que no falta ningún número




function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let suma = 1
  for (let i = 0; i < numeros.length; i++) {
    if(suma !== numeros[i]){
      return suma;
    }
    suma++;
  }
  return null;
}

module.exports = encontrarNumeroFaltante;
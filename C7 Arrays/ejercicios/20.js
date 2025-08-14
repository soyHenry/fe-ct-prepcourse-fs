function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[i] !== array[j]) return false;
    }
  }
  return true;
}

module.exports = todosIguales;

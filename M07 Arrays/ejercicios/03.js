function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
<<<<<<< HEAD

    for (var i = 0 ; i < array.length ; i++){
    if (array[i] === elemento){
      return i;
  } 
}
return -1;
=======
  for (var i = 0; i < array.length ; i++){
    if (array [i] === elemento){
      return i;
    }
  }
    return -1;
>>>>>>> 73a5dd1e02fae8c42b4eabb153a1742ae5f8d5e8
}



module.exports = encontrarElemento;

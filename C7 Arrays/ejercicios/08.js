
let array = [1,2,3,4,3,5,2,6,7,4,5,6,7,8,9]
console.log(array, array.length);

function encontrarElemento(num, array) {

   for (var i=0;i<array.length;i++){

      if (array[i] === num) return i
    
   }
   return -1
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
}

module.exports = encontrarElemento;
console.log (encontrarElemento (4, array));

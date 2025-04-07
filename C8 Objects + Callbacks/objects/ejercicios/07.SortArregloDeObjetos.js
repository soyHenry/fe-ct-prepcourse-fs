var sortby = "a";
var list = [
   {a: 1, b: 2},
   {a: 2, b: 2},
   {a: 2, b: 40}
];

function sort(sortBy, list) {
   // Ordenar el arreglo de objetos de manera descendente según el valor de sortBy
   return list.sort((obj1, obj2) => {
      if (obj1[sortBy] > obj2[sortBy]) {
         return -1; // El primer objeto es mayor, lo ponemos antes (descendente)
      } else if (obj1[sortBy] < obj2[sortBy]) {
         return 1; // comola condicion es falsa ponemos -1 moviendo el obj2 al obj1 (descendente)
      } else {
         return 0; // Son iguales, no cambiamos el orden
      }
   });
}

   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:


module.exports = sort;
console.log (sort(sortby, list))

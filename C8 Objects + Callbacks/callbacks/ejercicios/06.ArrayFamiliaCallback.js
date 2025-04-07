
var arreglo = ["Mati","Mery","Feli","Manu"]


function map(array, cb) {
var nuevoarreglo = []
for (i=0; i< array.length; i++){
 nuevoarreglo.push (cb (array[i]))
}
return nuevoarreglo
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
}

module.exports = map;
function mapeayguardanuevosvaloresennuevoarreglo (ele){
  return "Hola " + ele
}
console.log (map (arreglo,mapeayguardanuevosvaloresennuevoarreglo))
let array = [1,2,3,4,5,6,1,2,3,4,5,6,7,8,3,5,6]
console.log (array.length);
function duplicarElementos(array) {

  let nuevoarray = []
  let arrayx2 = []
  let arrayduplica = []
  for (i=0; i<array.length;i++){
    // nuevoarray.push (array[i]);
    // arrayx2.push (array [i]*2);
    arrayduplica.push (String(array[i]));
    arrayduplica.push (array[i]);
    
  }
  return arrayduplica;
    
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
}

module.exports = duplicarElementos;
console.log (duplicarElementos(array), duplicarElementos(array).length);

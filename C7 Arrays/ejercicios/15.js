function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
let mayor = -100;
for (let i = 0; i < array.length; i++) {
  if(mayor < array[i]){
    mayor = array[i]
  }
}
if(array.length == 0) return 0;
return array.indexOf(mayor);
}

module.exports = encontrarIndiceMayor;

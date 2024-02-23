function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  
//   for (var i = 0; i < array.length; i++){
//     cb(array[i]);
//   }
// return array;

array.forEach(function (item){
  cb(item);
});

}

module.exports = forEach;

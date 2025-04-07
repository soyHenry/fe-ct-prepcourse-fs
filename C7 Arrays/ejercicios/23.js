

function breakStatement(num) {
  var nuevonum = num;  // Empezamos con el número dado
  var nuevoarray = [];
  
  for (var i = 0; i < 10; i++) {
    nuevonum += 2;  // Sumamos 2 al número en cada iteración
    nuevoarray[i] = nuevonum;  // Guardamos el valor en el arreglo
    
    // Comprobamos si el valor de nuevonum es igual a la cantidad de iteraciones
    if (i === nuevonum) {
      return "Se interrumpió la ejecución";  // Interrumpimos y retornamos el mensaje
    }
  }
  
  return nuevoarray;  // Si no se interrumpió, retornamos el arreglo completo
}

module.exports = breakStatement;
console.log(breakStatement(0));  // Prueba con el número -20
















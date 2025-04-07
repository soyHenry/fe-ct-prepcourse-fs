function doWhile(num) {

  var i = 0;
  do {
  num = num+5; 
  i = i+1;
  }
  while (i<8)
  
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  return num;
}

module.exports = doWhile;
console.log (doWhile(2));
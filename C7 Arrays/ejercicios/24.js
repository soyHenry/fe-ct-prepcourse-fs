

function continueStatement(num) {

  var nuevonum = num
    var nuevoarray = []

  for (i=0;i<=9;i++){
    if (i===5) continue
      nuevonum += 2
      nuevoarray[i]=nuevonum
  
    }

return nuevoarray

  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
}

module.exports = continueStatement;
console.log (continueStatement(2));
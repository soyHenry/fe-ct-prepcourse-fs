function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  valor = [];

  for (i=0; i< num.length; i++){
    if (num[i]<=10){
      num = num +2;
      valor.push(num[i]);
    }
  }
  if (valor[i] === num[i]){
    return "Se interrumpió la ejecución";
  }
  return valor;

}

module.exports = breakStatement;

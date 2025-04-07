let arreglo = [1,2,3,5,6]
console.log (arreglo);

function multiplicarArgumentos() {

 if (arguments.length ===0) return 0

 let producto = 1
 
 for (var i=0;i<arguments.length;i++){
  producto *= arguments [i]
 }
 return producto
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
}

module.exports = multiplicarArgumentos;
console.log (multiplicarArgumentos(...arreglo));
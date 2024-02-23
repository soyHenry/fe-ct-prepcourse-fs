function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
    // Si no se pasan argumentos, retornamos 0
    if (arguments.length === 0){
      return 0;
    }
    if (arguments.length === 1){
      return arguments[0];
    }
    var producto = 1;

    for (var i = 0; i < arguments.length; i++ ){
      producto *= arguments[i];
    }
    return producto;
  }

module.exports = multiplicarArgumentos;

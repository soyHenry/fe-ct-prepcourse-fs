//1° forma de declarar funciones
function sumaTres(x){
  return x+3;
}

//2° forma de declarar funciones
var sumaTres = function(x){
  return x + 3;
};

//3° forma de declarar funciones
//arrow function - funcion flecha
var sumaTres = (x) => {
  return x + 3;
};

sumaTres(5)

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }

  //Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 
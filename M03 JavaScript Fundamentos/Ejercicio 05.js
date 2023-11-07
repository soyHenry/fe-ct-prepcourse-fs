/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   if (num > 0){
      console.log('Es positivo');
      return ('Es positivo');
   }else if(num < 0){
      console.log('Es negativo');
      return ('Es negativo');
   }else if (num == 0){
      console.log(false);
      return (false);
   }

   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
}

function agregarSimboloExclamacion(str) {

   console.log(str + '!');
   return (str + '!');

   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
}

function combinarNombres(nombre, apellido) {
   console.log(nombre +' ' + apellido);
   return (nombre +' ' + apellido);

   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
}

function obtenerSaludo(nombre) {
   console.log('Hola' + ' '+nombre + '!' );
   return ('Hola' + ' ' +nombre + '!');

   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
   console.log(alto*ancho);
   return (alto*ancho);

   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
}

function retornarPerimetro(lado) {
   console.log(lado*4);
   return(lado*4);

   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
}

function areaDelTriangulo(base, altura) {
   console.log(base*altura)/2;
   return(base*altura)/2;
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
}

function deEuroAdolar(euro) {
   console.log(euro*1.20);
   return(euro*1.20);
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
}

function esVocal(letra) {


   if (letra==='a'){
      console.log('Es vocal');
      return ('Es vocal');n
   }else if (letra==='e'){
      console.log('Es vocal');
      return ('Es vocal');
   }else if (letra==='i'){
      console.log('Es vocal');
      return ('Es vocal');
   }else if (letra==='o'){
      console.log('Es vocal');
      return ('Es vocal');
   }else if (letra==='u'){
      console.log('Es vocal');
      return ('Es vocal');
   }else{
      console.log('Dato incorrecto');
      return ('Dato incorrecto');
   }
}

esVocal();
      

  
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};

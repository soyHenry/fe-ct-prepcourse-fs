/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

// La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
DocumentType.HTML


   function esPositivo(num) {

   num = prompt('¿que número quieres introducir? ');

   if(0 <= num)
   {
         console.log('El número introducido es negativo')
   }

   if(0 >= num)
   {
         console.log('El número introducido es positivo')
   }
   

         console.log('Número por favor')
   
   return esPositivo;
}
num = 6


function agregarSimboloExclamacion(string) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
string = prompt('objeto, Articulo, inmóbil')

if (string === typeof String)
{
    string + 'es material. \n ¿quieres correr?' + '!';
}

if (string === typeof Number)
{
    string + '¿quieres jugar ajedrez? '+ '!'   
}

return string 


}

function combinarNombres(nombre,apellido,azu) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código: 
   nombre = 'Gillermo'
   apellido = 'Bustamante'
   azu = (nombre + 'op' + apellido)
      console.log()
   return nombre +  apellido;

}

function obtenerSaludo(nombre, nombre2) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
      nombre = '"merencumbé'
      nombre2 = ' Sanchez"'
      man_en_la_cara = nombre + ')opo(' + nombre2 ;
      console.log(man_en_la_cara)
      salida = nombre + nombre2;

      return nombre
   }     

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
      ancho = 43
      alto = 86

      return (ancho * 2) * (2 * alto);
}

function retornarPerimetro(lado_a, lado_b) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:           Rectangulo  perimetro medido con las unidades de medida (c,g,s)
   //                     
      lado_a = 8 
      lado_b = 15

      return (2 * lado_a) + (2 * lado_b)

   }

function areaDelTriangulo(base, altura)
{
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   base = 5;
   altura = 10;
   
   return base * altura
}

function deEuroAdolar(euro, cambio, dolar) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
euro = 1.20; 
cambio = prompt(typeof Number('Euro a cambiar'));
dolar = cambio * euro;


return dolar;
}

function esVocal(vocal, text)
{
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:

   vocal = {a,e,i,o,u}
if (text === vocal)
{
      console.log('Es vocal');
}

else 
{
   console.log('Dato incorrecto');
}

// entrada 'Texto', string
text = 'o';


return Bolean;
}
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
}
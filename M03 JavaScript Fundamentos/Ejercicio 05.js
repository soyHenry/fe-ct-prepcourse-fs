/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   if(num > 0) return 'Es positivo'
   else if (num < 0) return 'Es negativo'
   else return false
}

function agregarSimboloExclamacion(str) {
   return str + '!'
}

function combinarNombres(nombre, apellido) {
   return nombre + ' ' + apellido
}

function obtenerSaludo(nombre) {
   return 'Hola ' + nombre + '!'
}

function obtenerAreaRectangulo(alto, ancho) {
   return alto * ancho
}

function retornarPerimetro(lado) {
   return lado + lado + lado + lado 
}

function areaDelTriangulo(base, altura) {
   return (base * altura)/2
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   return euro * 1.2
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') return 'Es vocal'
   else if (letra.length > 1) return 'Dato incorrecto'
   else if (letra !== 'a' || letra !== 'e' || letra !== 'i' || letra !== 'o' || letra !== 'u') return 'Dato incorrecto'
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
};

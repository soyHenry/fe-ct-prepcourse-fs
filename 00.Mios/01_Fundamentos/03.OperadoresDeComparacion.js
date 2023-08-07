//Operadores Relacionales


//Operaciones de comparación devuelven true o false...
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);


//Igualdad vs igualdad estricta 
// == solo verifica q su valor sean iguales
//=== verifica el tipo de dato y el valor sea iguales
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b; //DE DERECHA A IZQ a=b y despues c=a
console.log (c); 
//regex es de izq a derecha
console.log(16/2/4) //16/2 y despues /4
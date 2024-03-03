// function foo(objecto){
//     return objecto["clave"];
// }

// var my_var ={
//     clave: "valor",
//     otro: "dato"
// };

// var resultado = foo(my_var);

//2do ejercicio

// function foo(palabra){
//     var resultado = palabra.split ("").reverse().join("");
//     return palabra === resultado;
// }

// var resultado = foo("neuquen")

//3er ejercicio

// function foo(str){
//     return str.replace("a", "z");
// }
// var resultado = foo("casa")

//3er ejercicio

// let obj = {a: 1, b:2};
// delete obj.b;

//4to ejercicio

// function foo(objeto){
//     var nuevoObjeto = {};
//     for (var clave in objeto){
//         nuevoObjeto[clave]=objeto[clave]*2;
//     }
//     return nuevoObjeto;
// }
// var resultado = foo({a:1,b:2,c:3})

//5to ejercicio

// var resultado;

// if(5>3){
//     resultado ="verdadero";
// }else{
//     resultado="falso";
// }

//6to ejercicio

// #banner{
//     background-image: url("banner.jpg");
// }

//7mo ejercicio

// var resultado = 2 !="2" || 2 !==2;

//8vo ejercicio

// var myvar=1;
// myvar -= 2*3;

//9no ejecicio

// function foo(num){
//     if(num >10){
//         return true;
//     }else {
//         return false;
//     }
// }

//10mo ejercicio

// function foo(numeros){
//     var my_var = 0;

//     for (var i=0;i<numeros.length;i++){
//         if(numeros[i]>my_var){
//             my_var=numeros[i];
//         }
//     }
//     return my_var;
// }
// var resultado = foo([3,7,2,9,4]);

//ejercicio 11

// var i=0;

// while (i<3){
//     console.log(i);
//     i++;
// }

//ejercicio 12

// function foo(arreglo){
//     var my_var = 0;

//     for (var i=0; i<arreglo.length; i++){
//         if (arreglo[i] % 3 === 0){
//             my_var += arreglo[i];
//         }
//     }
//     return my_var;
// }

// var resultado = foo ([3,5,6,8,9])

//ejercicio 13

// function foo(arreglo){
//     var nuevo_arreglo = arreglo.join(" ").split(" ");
//     var resultado = "";

//     for (var elemento of nuevo_arreglo){
//         if (elemento.length > resultado.length){
//             resultado=elemento;
//         }
//     }
//     return resultado;
// }

//ejercicio 14

// var myVar = 1;
// myVar = myVar ++ + 1;
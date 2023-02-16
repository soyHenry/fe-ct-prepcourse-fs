function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
    var suma = arrayOfNumbers.reduce((a,b) => { return a + b })
    cb(suma)
}
arr = [1, 2, 3, 4, 5]
var callback = function(cb) {
    return cb
}
// var suma = arr.reduce((a,b) => { return a + b })
// console.log(suma);
console.log(sumarArray(arr, callback));

/* function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    var upperCase = function(letra) {
        return letra[0].toUpperCase() + letra.substring(1)
    }

    var  firstUppercase = function(cb1) {
        return nombre + ' - ' + cb1(nombre)
    }

    return firstUppercase(upperCase)
}
console.log(mayuscula('ana')); */

/* var devuelvoFrase = function(comida) {
    return 'Hoy quiero comer: ' + comida
}

var hablar = function (comida, cb) {
    return cb(comida)
}

var fraseFinal = hablar('Pizza', devuelvoFrase)
console.log(fraseFinal); */

/* function crearUsuario() {
    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
    // El valor de cada propiedad la recibirá por parámetro.
    // Además, esta clase debe tener un método llamado "saludar".
    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
    // Retornar la clase.
    class Usuario {
       constructor(usuario, nombre, email, password) {
          this.usuario = usuario,
          this.nombre = nombre,
          this.email = email,
          this.password = password
       }
    
       saludar() {
          return 'Hola, mi nombre es ' + this.nombre
       }
    }
    
    return Usuario
}

console.log();
console.log(John.saludar());

console.log(crearUsuario); */

/* function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8

    objetoProducto.calcularPrecioDescuento = function() {
        if(this.porcentajeDeDescuento % 1 == 0) return this.precio - (this.precio * (this.porcentajeDeDescuento / 100))
        else return this.precio - (this.precio * this.porcentajeDeDescuento)
    }
    return objetoProducto
}
finalPrice = {
    precio: 10,
    porcentajeDeDescuento: 20
}
console.log(agregarMetodoCalculoDescuento(finalPrice)); */

/* let objetoProducto = {
    precio: 10,
    porcentajeDeDescuento: 20,
    calcularPrecioDescuento: function() {
      let descuento = this.precio * (this.porcentajeDeDescuento / 100);
      let precioFinal = this.precio - descuento;
      return precioFinal;
    }
};
  
console.log(objetoProducto.calcularPrecioDescuento()); */
  

/* function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
        objetoMuchosUsuarios[i].esPremium = true;
      }
      return objetoMuchosUsuarios;
}

var object = [{esPremium: null}, {esPremium: null}, {esPremium: null}]
console.log(pasarUsuarioAPremium(true)) */

/* function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    objetoUsuario.amigos.push(nuevoAmigo)
    return objetoUsuario
 }
 var object = {name: 'John', password: 'pass', amigos: ['amigo']}
 console.log(agregarAmigo(object, 'nuevo Amigo')) */

/* function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
    // La nueva contraseña la recibes por parámetro.
    // Retornar el objeto.
    objetoUsuario.password = nuevaPassword
    return objetoUsuario
}
var object = {name: 'John', password: 'pass'}
console.log(actualizarPassword(object, 'other')) */

/* function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
    // En ese caso retornar true. Caso contrario, false.
    return objetoUsuario.password === password
}
var object = {name: 'John', password: 'pass'}
console.log(verificarPassword(object, 'pass')); */

/* function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que retorne el string: "Meow!".
    // Retornar el objeto.
    var cats = {
        nombre: nombre,
        edad: edad,
        meow: () => { console.log('Meow!'); }
    }
    return cats
}
console.log(crearGato('misifu', 5)); */

/* function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    var newArray = [];
    for (var i = 0; i < 10; i++) {
        if (i === 5)  continue
        num += 2;
        newArray.push(num);
    }
    return newArray;
}
const arr = [50]
console.log(continueStatement(50)) */
//  const arr = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]
//  const arr = ['V','a','l','e','n','t','i','n','a']
//  console.log(funcionEjemplo(arr));
// multiplicarArgumentos(1,2,3,4)
 
/* function tabla() {
    const tabla = []
    for (let i = 0; i <= 10; i++) {
        let iter = 0
        iter += i * 6
        tabla.push(iter)
    }
    return tabla
}

console.log(tabla()); */

/* const cond = ("Enero","Marzo","Noviembre")
const newArray = []

return newArray.push(cond)
const mounth = array.includes(cond)
if(mounth) 
return "No se encontraron los meses pedidos"  */

/* function multiplicarArgumentos() {
    var args = Array.prototype.slice.call(arguments);
    if(args.length === 0) return 0
    else {
        var total = 1;
        for( var i = 0; i < args.length; i++){
            total *= args[i]
        };
        return total;
    }
} 
console.log(multiplicarArgumentos(0)) */

/* const mesesDelAño = (array) => {
    let findMonths = ["Enero", "Marzo", "Noviembre"]
    let mesesHallados = array.filter((mes) => {
        if(findMonths.indexOf(mes) >= 0) return true
        else return false
    })

    if(mesesHallados.length == findMonths.length) return mesesHallados
    else return "No se encontraron los meses pedidos"
}
const arr = ["Enero","Marzo","Noviembre","Mayo"] */
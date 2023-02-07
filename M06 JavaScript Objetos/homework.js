/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  const obj1 = {
    nombre: nombre,
    edad: edad,
  };
  return obj1;
}

console.log(crearGato("diego", 23));

function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retornar el objeto.
  // Tu código:
  const obj2 = {
    nombre: nombre,
    email: email,
    password: password,
  };

  return obj2;
}

console.log(nuevoUsuario("Diego", "diegohansselp24@gmail.com", "ass3q832"));

let obj3 = {};
const prop = null;

function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto.nombre = propiedad;
  return objeto;
}
console.log(agregarPropiedad(obj3, prop));

const obj4 = {
  metodo: function () {
    console.log("Soy una Funcion");
  },
};
let word = "metodo";

function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === "function") {
    return objeto[metodo]();
  }
}

console.log(invocarMetodo(obj4, word));

const obj6 = {
  numeroMisterioso: 2,
};

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  const valor = Object.values(objetoMisterioso);
  return valor * 5;
}

console.log(multiplicarNumeroDesconocidoPorCinco(obj6));

const obj7 = {
  num: 14,
  arr: [],
  stg: "",
  obj: {},
};

const prop2 = "arr";

function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}

console.log(eliminarPropiedad(obj7, prop2));

const obj8 = {
  email: "",
  arr: [],
  stg: "",
  obj: {},
};

function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  const peticion =
    objetoUsuario.hasOwnProperty("email") && objetoUsuario.email !== undefined;
  if (peticion) {
    return true;
  } else {
    return false;
  }
}

console.log(tieneEmail(obj8));

const obj9 = {
  gorra: "Yankkes",
  pantalon: "Levis",
  playera: "Tommy Hilfiger",
  calzado: "Nike",
};

const prop3 = "calzado";

function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  const peticion = objeto.hasOwnProperty(propiedad);

  if (peticion) {
    return true;
  } else {
    return false;
  }
}

console.log(tienePropiedad(obj9, prop3));

const obj10 = {
  email: "",
  password: 8838277492,
};

const prop4 = 8838277492;

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:

  if (
    objetoUsuario.hasOwnProperty("password") &&
    objetoUsuario.password === password
  ) {
    return true;
  } else {
    return false;
  }

  //   const autoriza = Object.values(objetoUsuario) === password;
  //   if (autoriza) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // for(let prop in objetoUsuario) {
  //    if(objetoUsuario[prop] !== password){
  //       return true;
  //    } else {
  //       return false;
  //    }
  // }
}

console.log(verificarPassword(obj10, prop4));

const obj11 = {
  password: 121383823,
  email: "garbanzo@gmai.com",
};

const prop5 = 9387837728;

function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}

console.log(actualizarPassword(obj11, prop5));

const obj12 = {
  amigos: ["rafael", "antonio", "liandro"],
};

const prop6 = "juan";

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

  const amigos = objetoUsuario.amigos;
  amigos.push(nuevoAmigo);
  return objetoUsuario;
}

console.log(agregarAmigo(obj12, prop6));

const arr2 = [
  { nombre: "Juan", esPremium: null },
  { nombre: "Diego", esPremium: null },
  { nombre: "Antonio", esPremium: null },
];

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for (let usuario of objetoMuchosUsuarios) {
    usuario.esPremium = true;
  }
  return objetoMuchosUsuarios;
}

console.log(pasarUsuarioAPremium(arr2));

const obj13 = {
  posts: [
    {
      likes: 3,
    },
    {
      likes: 8,
    },
    {
      likes: 2,
    },
    {
      likes: 3,
    },
  ],
};

function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let suma = 0;
  for (let post of objetoUsuario.posts) {
    suma += post.likes;
  }
  return suma;
}

console.log(sumarLikesDeUsuario(obj13));

const obj14 = {
   precio:50,
   porcentaje:50,
}

function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function() {
   let descuento = objetoProducto.precio * objetoProducto.porcentaje / 100;
   let precioFinal = objetoProducto.precio - descuento;
   return precioFinal;
 };
 return objetoProducto.calcularPrecioDescuento();
}


console.log("el precio final es",agregarMetodoCalculoDescuento(obj14));



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};

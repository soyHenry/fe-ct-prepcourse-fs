

function crearGato(nombre, edad) {
  var objeto = { 
    nombre: nombre, 
    edad: edad,
    meow: "Meow!"  // En lugar de la función, directamente el valor que debería retornar
  };
  
  return objeto;
}

const gato = crearGato("Michu", "10 Anos");

console.log(gato);  // Muestra el objeto con las propiedades "nombre", "edad" y "meow" con su valor

// 
// function crearGato(nombre, edad) {

  // Creamos el objeto con las propiedades "nombre" y "edad"
  // var objeto = {
    // nombre: nombre,
    // edad: edad,
    // Agregamos la propiedad "meow" como una función
    // meow: function() {
      // return meow["Meow!"];
    // }
  // };

  // Retornamos el objeto
  // return objeto;
// }
console.log (crearGato ("Michu", "10 Anos"))

module.exports = crearGato;

//--------- Dot-Notation y Bracket-Notation ----------

const atuendos = {manos:["Gauntes", "Anillos"], pies:["Zapatos", "Soquetes"]}
//console.log(atuendos.manos);

atuendos["piernas"] = ["Pantalon", "Boxers"]
//console.log(atuendos);

let comidas = {};

const agregaraComidas = (propUno, propDos) => {
    comidas[propUno] = ["Vegetales", "Legumbres", "Frutas", "Agua"];
    comidas[propDos] = ["Hamburguesa", "Pizza", "Helado"]
}
agregaraComidas("Saludables", "NoSaludables")

console.log(comidas);

// De la misma manera que utilizamos la Dot-Notation o notación por puntos para acceder o asignar un valor, también podemos usar Bracket-Notation, o notación por corchetes. Lo único que cambia es la forma en la que lo escribimos.

// Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.

//---------- Metodos de Objetos -----------

// El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.

const libro = { autor: "Borges", genero: "Policial", año: "1990"};
const respuesta = libro.hasOwnProperty("autor");

//console.log(respuesta);

const todasLasPropiedades = Object.keys(libro)
//console.log(todasLasPropiedades);

let mundo = {continentes: 7 , paises: 197, oceanos: 5};
for(const prop in mundo) {
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es Valor: " + mundo[prop]);
}

// Explicacion de metodos For-of y For-in
// -for...in se utiliza para recorrer propiedades de objetos y 
//     devuelve las claves o índices de las propiedades.
// -for...of se utiliza para recorrer elementos de arreglos y devuelve los valores de los elementos.
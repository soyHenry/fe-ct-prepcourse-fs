// let persona= {
//     nombre: "Gilberto",
//     edad: 36
// };

// persona.job = "Developer";
// persona.nombre = "Lorena";
// console.log(persona.nombre);

// var atuendos= {
//     manos:["guantes","anillos"],
//     pies :["Zapatos", "Soquetes"]
// };

// atuendos["piernas"] = ["Bermudas", 'Pantalones'];
// console.log(atuendos["manos"]);

// let comidas = {}
// let diferenciaDeNotaciones = function(propUno, propDos){
//     comidas[propUno] = ["Frutas","Vegentales"]
//     comidas[propDos] = ["Hamburguesa", "Papas fritas"]
// }

// diferenciaDeNotaciones("comida1", "comida2");
// var tienepropiedad = comidas.hasOwnProperty("comida1")
//console.log(tienepropiedad);

// surAmerica = {
//     paises : 20,
//     ciudades : 120,
//     aerolineas : 12
// };

// for( let prop in surAmerica){
//     console.log("nombre de propiedad: " + prop);
//     console.log ("cantidad: " + surAmerica[prop]);
// }

let mascota = {
    animal: "perro",
    raza: "Frenchie",
    amistoso: true,
    dueño: "Gilberto Díaz",
    info: function showRaza() {
        console.log("mi perrro es un: " + this.raza)
    }
};

mascota.info();
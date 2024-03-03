var factory1 = {
    name: "Educode",
    location: "Bodota D.C",
    employees: 2000,

    clients: [
        {
            product: "Iron",
            position: 12,
        },
        {
            product:"Wood",
            position: 16,
        },
    ],
    address: "Torem",
    newFunction: function (info){
        return info + "Mauricio";
    },
}

    var propiedad = "address";
    console.log (factory1.name)
    console.log (factory1[propiedad])
    console.log (factory1.newFunction("Hola "))
    console.log (factory1.hasOwnProperty("clients"))
    console.log (factory1.keys())
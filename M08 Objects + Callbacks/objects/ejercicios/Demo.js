var object1 = {
    name:"Carlos",
    position:"Top",
    height: 185,

    owner: [
        {
            address: "Torem",
            married: "No",
        },
        {
            prototy:"envelop",
            robot: 345,
        },
    ],
    neiborghood:"Toberin",
    funcionM: function (info){
        return info + "Hola";
    },
};

var prop = "name";

console.log(object1.name);
console.log(object1.neiborghood);
console.log(object1[prop])

console.log(object1.funcionM("M@O: "));

console.log(object1.hasOwnProperty(""))

// console.log(object1.keys (""))
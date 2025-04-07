let array = ["Enero", "Febrero", "Diciembre", "Julio", "Noviembre"]

function mesesDelAño(array) {
let nuevoarray = []
  if (array.includes ("Enero") && array.includes ("Marzo") &&  array.includes ("Noviembre")){
    nuevoarray.push ("Enero", "Marzo", "Noviembre")
    return nuevoarray
  }
    else return "No se encontraron los meses pedidos"
  
  } 
   // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

module.exports = mesesDelAño;
console.log (mesesDelAño(array));





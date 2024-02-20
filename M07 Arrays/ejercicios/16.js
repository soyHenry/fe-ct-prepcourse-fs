function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  meses = [];

  for (var i=0; i<array.length; i++){
    
    if (array[i]=== "Enero"){
      meses.push(array[i])
    }else if (array[i]==="Marzo"){
      meses.push(array[i])
    }else if (array[i]==="Noviembre"){
      meses.push(array[i])
    }
  }
  if (meses.length !== 3){
    return "No se encontraron los meses pedidos";
  }
  return meses;
}

module.exports = mesesDelAño;

// esArrayNoVacio: Crea una función que compruebe si un argumento es un array y si tiene al menos un elemento, devolviendo true si cumple ambas condiciones, false si no.

function esArrayNoVacio(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

module.exports = esArrayNoVacio;

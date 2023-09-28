// AgregarMetodoAArray: Crea una función que añada un nuevo método al prototipo de Array llamado duplicar, que duplica todos los elementos del array.

function duplicar() {
  return this.map((elemento) => elemento * 2);
}

Array.prototype.duplicar = duplicar;

module.exports = duplicar;

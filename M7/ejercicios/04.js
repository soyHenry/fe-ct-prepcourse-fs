// AgregarMetodoAString: Crea una función que añada un nuevo método al prototipo de String llamado invertir, que invierte el orden de los caracteres en el string.

function invertir() {
  return this.split("").reverse().join("");
}

String.prototype.invertir = invertir;

module.exports = invertir;

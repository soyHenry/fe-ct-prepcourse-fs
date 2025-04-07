/*function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
};*/

/*test('El tipo de dato ( typeof ) de "hello" debe retornar "string"'); */

const valor = "Hellow Mundo";

function esTipoDato(valor) {
  return typeof valor;
}

console.log (esTipoDato(valor));

/*function () {
  expect(esTipoDato('hello')).toBe('string');
};

  module.exports = esTipoDato;*/

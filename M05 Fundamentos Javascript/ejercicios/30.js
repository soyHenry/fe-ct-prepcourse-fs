function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   if (typeof(lado) === "number") {
      return lado * 4;
   }
}

module.exports = retornarPerimetro;

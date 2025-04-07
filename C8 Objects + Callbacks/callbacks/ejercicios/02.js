function callback (string){
   return (string + "Mundo")
   }
   
function cambiarCadena(string, callback) {

    // Si se recibe un callback, lo aplicamos al string. Si no, retornamos el string original.
  if (typeof callback === 'function') {
   return callback(string);
 } else {
   return string;
 }

   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
}


console.log (typeof callback())

module.exports = cambiarCadena;
console.log (cambiarCadena("Hola", callback))
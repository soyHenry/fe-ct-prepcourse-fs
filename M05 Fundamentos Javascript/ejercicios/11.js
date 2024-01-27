function esMayorDeEdad(fechaNacimiento) {
  var year = new Date().getFullYear(); // Obtiene el año actual correctamente
  var añoNacimiento = fechaNacimiento.getFullYear(); // Obtiene el año de nacimiento
  var edad = year - añoNacimiento; // Calcula la edad
  return edad >= 18; // Verifica si la edad es 18 o más
}

module.exports = esMayorDeEdad;
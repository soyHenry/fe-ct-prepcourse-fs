function esMayorDeEdad(fechaNacimiento) {
  // Crear una fecha actual
  const fechaActual = new Date();
  
  // Obtener el año de la fecha actual
  const añoActual = fechaActual.getFullYear();
  
  // Obtener el año de nacimiento de la fecha de nacimiento proporcionada
  const añoNacimiento = fechaNacimiento.getFullYear();
  
  // Determinar si la persona tiene 18 años o más
  return añoActual - añoNacimiento >= 18;
}

module.exports = esMayorDeEdad;

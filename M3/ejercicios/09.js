// esMayorDeEdad: Crea una función que determine si una persona es mayor de edad a partir de su fecha de nacimiento y devuelva true si lo es, false si no.
// Una persona es mayor de edad si tiene 18 años o más.
// Para este ejercicio puedes investigar el método  getFullYear() de la clase Date para obtener el año actual.

function esMayorDeEdad(fechaNacimiento) {
  const fechaActual = new Date();
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  return edad >= 18;
}

module.exports = esMayorDeEdad;

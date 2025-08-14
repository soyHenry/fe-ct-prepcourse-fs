function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
    objetoMuchosUsuarios[i].esPremium = true;
  }
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;

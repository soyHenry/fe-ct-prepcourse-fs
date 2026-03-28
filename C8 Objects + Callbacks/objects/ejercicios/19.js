function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // Define la propiedad "esPremium" de todos los usuarios como true.
  // Tu codigo:
  for (let i = 0; i < objetoMuchosUsuarios.length; i += 1) {
    objetoMuchosUsuarios[i].esPremium = true;
  }
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;

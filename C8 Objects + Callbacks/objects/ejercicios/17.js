function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contrasena guardada en la propiedad "password" del "objetoUsuario".
  // Tu codigo:
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}

module.exports = actualizarPassword;

function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // Tu codigo:
  return objetoUsuario.email !== undefined && objetoUsuario.email !== null;
}

module.exports = tieneEmail;

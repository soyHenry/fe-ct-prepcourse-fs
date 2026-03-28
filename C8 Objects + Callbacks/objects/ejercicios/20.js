function sumarLikesDeUsuario(objetoUsuario) {
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu codigo:
  let suma = 0;
  for (let i = 0; i < objetoUsuario.posts.length; i += 1) {
    suma += objetoUsuario.posts[i].likes;
  }
  return suma;
}

module.exports = sumarLikesDeUsuario;

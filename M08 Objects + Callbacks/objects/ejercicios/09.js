function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  };

  // Retornar el objeto usuario
  return usuario;
}


module.exports = nuevoUsuario;

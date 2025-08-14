function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  switch (true) {
    case status == 1:
      return "Online";
      break;
    case status == 2:
      return "Away";
      break;
    default:
      return "Offline"
      break;
  }
}

module.exports = conection;

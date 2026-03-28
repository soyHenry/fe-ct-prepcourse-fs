function conection(status) {
  // El argumento "status" representa el estado de conexion de un usuario.
  // Tu codigo:
  if (status === 1) return 'Online';
  if (status === 2) return 'Away';
  return 'Offline';
}

module.exports = conection;

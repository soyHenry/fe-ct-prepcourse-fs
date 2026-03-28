function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes.
  // Tu codigo:
  switch (idioma) {
    case 'aleman':
      return 'Guten Tag!';
    case 'mandarin':
      return 'Ni Hao!';
    case 'ingles':
      return 'Hello!';
    default:
      return 'Hola!';
  }
}

module.exports = saludo;

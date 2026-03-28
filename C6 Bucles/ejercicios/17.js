function colors(color) {
  // La funcion recibe un color.
  // Tu codigo:
  switch (color) {
    case 'blue':
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';
    default:
      return 'Color not found';
  }
}

module.exports = colors;

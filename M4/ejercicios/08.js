// diasEnMes: Crea una función que reciba un mes (número) y determine cuántos días tiene. Utiliza un bucle do-while para validar que el mes ingresado sea válido.

function diasEnMes(mes) {
  let dias = 0;
  do {
    if (
      mes === 1 ||
      mes === 3 ||
      mes === 5 ||
      mes === 7 ||
      mes === 8 ||
      mes === 10 ||
      mes === 12
    ) {
      dias = 31;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
      dias = 30;
    } else if (mes === 2) {
      dias = 28;
    } else {
      dias = 0;
    }
  } while (mes < 1 || mes > 12);
  return dias;
}

module.exports = diasEnMes;

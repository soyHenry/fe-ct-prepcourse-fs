function combine(str1, str2, str3) {
  // Esta funcion debe combinar de forma alternada cada caracter de cada string.
  // Solo debe contabilizar aquellos que no esten vacios.
  // Tu codigo:
  const strings = [str1, str2, str3].filter((str) => str !== '');
  let resultado = '';
  let indice = 0;

  while (strings.some((str) => indice < str.length)) {
    for (let i = 0; i < strings.length; i += 1) {
      if (indice < strings[i].length) resultado += strings[i][indice];
    }
    indice += 1;
  }

  return resultado;
}

module.exports = combine;

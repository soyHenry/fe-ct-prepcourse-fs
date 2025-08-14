function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let suma = 0;
  let newstr1 = []
  let newstr2 = []
  let newstr3 = []
  let stringCompleto = [];
  if (str1.length !== 0){
    newstr1 = str1.split("");
  }
  if (str2.length !== 0){
    newstr2 = str2.split("");
  }
  if (str3.length !== 0){
    newstr3 = str3.split("");
  }
  suma = str1.length + str2.length + str3.length;
  for (let i = 0; i < suma; i++) {
    stringCompleto.push(str1[i]);
    stringCompleto.push(str2[i]);
    stringCompleto.push(str3[i]);
  }
  return stringCompleto.join("");
}

module.exports = combine;
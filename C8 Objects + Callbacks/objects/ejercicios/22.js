function esAnagrama(str1, str2) {
  // Determina si los dos strings son anagramas.
  // Tu codigo:
  const normalizar = (texto) => texto.toLowerCase().split('').sort().join('');
  return normalizar(str1) === normalizar(str2);
}

module.exports = esAnagrama;

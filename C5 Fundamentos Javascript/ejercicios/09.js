function esNuloOIndefinido(valor) {
  
  if (valor == undefined) return true;
  else if (valor == null) return true;
  else return false;

 // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
}

module.exports = esNuloOIndefinido;
console.log (esNuloOIndefinido ("a"));
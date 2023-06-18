function continueStatement(num) {
  var array = [];
  var suma = num;
  for (var i = 0; i < 10; i++) {
    if (i + 1 === 5) {
      continue;
    } else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}

console.log(continueStatement(4));

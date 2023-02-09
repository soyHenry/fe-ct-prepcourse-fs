/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   return Math.pow(num, 2)
}

function elevarAlCubo(num) {
   return Math.pow(num, 3)
}

function elevar(num, exponent) {
   return Math.pow(num, exponent)
}

function redondearNumero(num) {
   return Math.round(num)
}

function redondearHaciaArriba(num) {
   return Math.ceil(num)
}

function numeroRandom() {
   return Math.random()
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};

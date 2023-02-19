/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   let sqValue = Math.pow(num, 2);
   return sqValue;
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   let cbValue = Math.pow(num, 3);
   return cbValue;
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   let bElevadoN = Math.pow(num, exponent);
   return bElevadoN;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   let roundedValue = Math.round(num);
   return roundedValue;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   let ceiledValue = Math.ceil(num);
   return ceiledValue;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   let randomValue = Math.random();
   return randomValue;
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

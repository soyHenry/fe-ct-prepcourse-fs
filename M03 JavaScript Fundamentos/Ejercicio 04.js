/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num,z) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
num = 8;
z = math.pow(num,5)

console.log(z())
return num**5;

}

function elevarAlCubo(num,o,s) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
num = 9;
o = math.pow(num,3);
return elevarAlCubo;
}

function elevar(num, exponent, u) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   num = 4
   exponent = 4

   u = math.pow(num,exponent);
   return u;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   num = 5.26
   math.rango(num);
   return num;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:

   num = 35.3;
   math.ceil(num);
   return num;
}

function numeroRandom(h) {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:

   h= math.random()
   return h
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

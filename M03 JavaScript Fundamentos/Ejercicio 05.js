/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
	// La función recibe un entero. Devuelve como resultado un string que indica si el número
	// es positivo o negativo.
	// Si el número es positivo ---> "Es positivo".
	// Si el número es negativo ---> "Es negativo".
	// Si el número es 0, devuelve false.
	// Tu código:
	if (num !== 0) {
		if (num > 0) {
			return 'Es positivo';
		} else {
			return 'Es negativo';
		}
	} else {
		return false;
	}
}

function agregarSimboloExclamacion(str) {
	// Agrega un símbolo de exclamación al final del string "str" y retornelo
	// Ejemplo: "hello world" ---> "hello world!"
	// Tu código:
	return str + '!';
}

function combinarNombres(nombre, apellido) {
	// Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
	// Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
	// Tu código:
	return nombre + ' ' + apellido;
}

function obtenerSaludo(nombre) {
	// Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
	// Ejemplo: "Martin" ---> "Hola Martin!"
	// Tu código:
	return 'Hola ' + nombre + '!';
}

function obtenerAreaRectangulo(alto, ancho) {
	// Retornar el área de un rectángulo teniendo su altura y ancho.
	// Tu código:
	return ancho * alto;
}

function retornarPerimetro(lado) {
	// La función recibe como argumento la medida de un lado de un cuadrado.
	// Debes retornar su perímetro.
	// Tu código:
	return 4 * lado;
}

function areaDelTriangulo(base, altura) {
	// Calcula el área de un triángulo y retorna el resultado.
	// Tu código:
	return (base / 2) * altura;
}

function deEuroAdolar(euro) {
	// Supongamos que 1 euro equivale a 1.20 dólares.
	// Debes calcular el valor recibido como argumento pasándolo a dólares.
	// Tu código:
	var dolar = euro * 1.2;
	return dolar;
}

function esVocal(letra) {
	// Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
	// Si el usuario ingresa un string de más de un carácter debes retornar el mensaje: "Dato incorrecto".
	// Si no es vocal, también debe retornar "Dato incorrecto".
	// Tu código:
	if (letra.length > 1) {
		return 'Dato incorrecto';
	} else if (
		letra === 'a' ||
		letra === 'e' ||
		letra === 'i' ||
		letra === 'o' ||
		letra === 'u'
	) {
		return 'Es vocal';
	} else {
		return 'Dato incorrecto';
	}
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
	esPositivo,
	agregarSimboloExclamacion,
	combinarNombres,
	obtenerSaludo,
	obtenerAreaRectangulo,
	retornarPerimetro,
	areaDelTriangulo,
	deEuroAdolar,
	esVocal,
};

/*
 * Primeros pasos
**/

/* ------------- Variables y constantes ------------- */
/* ---------- Declaración e inicialización ---------- */

const hoy = 2020; // number
console.log("Estamos en el año...");
console.log(hoy);

let siguiente = hoy + 1; // Operadores aritméticos: + - * / %
console.log("Y el que viene será...");
console.log(siguiente);

console.log("Año actual: " + hoy + " | Año siguiente: " + (hoy + 1) );

/* ------------- Tipos de datos ------------- */

let numero = 2;
let numeroConvertido = numero.toString(); // "2"
let numeroReconvertido = parseInt(numeroConvertido); // 2

console.log(typeof numero); // number
console.log(typeof numeroConvertido); // string
console.log(typeof numeroReconvertido); // number

/* ------------- Condicionales ------------- */

/* -- Input -- */
const estamosEn = 1999;
let todoVaBien;

/* -- Process -- */
if ( estamosEn == 2020 ) { // Operadores lógicos: == != > <
	todoVaBien = true;
}
else {
	todoVaBien = false;
}

/* -- Output -- */
const mensajeSalida = "Estamos en " + estamosEn + ", el año ";

if ( todoVaBien ) {
	console.log(mensajeSalida + "bueno");
}
else {
	console.log(mensajeSalida + "malo");
}

/* ------------- Condicionales anidados ------------- */

let esBisiesto = false; // boolean

// Si es divisible por 400...
if( hoy % 400 == 0 ) {
	esBisiesto = true; // ... ES bisiesto
} else
{
	// Si es divisible por 100 (pero no por 400)...
	if( hoy % 100 == 0 ) {
		esBisiesto = false; // ... NO ES bisiesto
	}
	else {
		// Si es divisible por 4 (pero no por 100)...
		if( hoy % 4 == 0 ) {
			esBisiesto = true; // ... ES bisiesto
		}
		else {
			esBisiesto = false; // ... NO ES bisiesto
		}
	}
}

/* ------------- Bucles ------------- */

let contador = 0;

while ( contador < 3 ) {
	console.log("Todo va bien en la iteración " + contador);

	contador++;
	//contador += 1;
	//contador = contador + 1;
}

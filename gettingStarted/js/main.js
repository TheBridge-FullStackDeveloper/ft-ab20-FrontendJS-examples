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

/* ------------- Arrays ------------- */

let resultadosLoteria = [43, [2, 3], -9, 999];

console.log(typeof resultadosLoteria); // Array
console.log(resultadosLoteria[1][1]); // 3

console.log( resultadosLoteria[0] ); // 43
console.log( resultadosLoteria[2] ); // -9
console.log( resultadosLoteria[8] ); // undefined

console.log( resultadosLoteria.length ); // 4

resultadosLoteria[2] = 67;
console.log( resultadosLoteria[2] ); // 67

resultadosLoteria[8] = 99;
console.log( resultadosLoteria.length ); // 9

// Mostrar todos los resultados de la lotería
/*
let i = 0;

while(i < resultadosLoteria.length) {
	console.log( resultadosLoteria[i] );

	i++;
}
*/

function devolverResultados() {
	console.log( "Y los resultados de la lotería son..." );

	for (i = 0; i < resultadosLoteria.length; i++) {
		console.log( resultadosLoteria[i] );
	}
}

devolverResultados();

let nombre = "John Doe";

// Le asigna a un tratamiento a una persona dada
function darTratamiento(nombreSinPrefijo) { // With arguments (parámetros)

	let prefijo = "Sr./Sra./Srta./Srto. ";
	let nombreConPrefijo = "";

	nombreConPrefijo = prefijo + nombreSinPrefijo;

	return nombreConPrefijo;
}

console.log(nombre);
nombre = darTratamiento(nombre);
console.log(nombre);
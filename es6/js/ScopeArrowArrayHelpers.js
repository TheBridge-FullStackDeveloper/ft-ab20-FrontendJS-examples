"use strict";
/*
var --> scope (ámbito normal, el definido por {} solo para las funciones)
let, const --> block scope (ámbito de bloque, también para if, while, etc.)
El valor de let puede ser cambiado, mientras que el de const no
*/

function pow(base, exponent) {
	let i, result = 1;
	// Al igual que con var, existimos solo dentro de la función

	for (i = 0; i < exponent; i++) {
		result *= base;
	}

	if( result > 8 ) {
		const insideConstant = "Solo existo dentro del if y nunca cambiaré";
		let insideVariable = "Puedo cambiar, pero solo existo dentro del if";
		var outsideVariable = "También existo fuera del if y puedo cambiar";
	}

	//console.log(insideConstant); // Error (undeclared)
	//console.log(insideVariable); // Error (undeclared)
	//console.log(outsideVariable); // undefined / string

	return result;
}

console.log( "El resultado es: " + pow(3,2) ); // 9

console.log( "--------------------------" );
// ------------------------------------------------------------------

const saludar = nombre => "Hola, " + nombre;
//const saludar = function(nombre) { return "Hola, " + nombre; };

let miNombre = "David";
console.log( saludar(miNombre) );

//document.getElementById("pushme").addEventListener("click", function() {
document.getElementById("pushme").addEventListener("click", () => {
	alert("Congratulations!");
});

console.log( "--------------------------" );
// ------------------------------------------------------------------

let numeros = [1, 2, 3];

/* ES5 */
numeros.forEach(function(item) {
			console.log(pow(item, 2));
		});

console.log(numeros);
console.log( "--------------------------" );

/* ES6 */
let cuadrados = numeros.map(item => pow(item, 2));
console.log(cuadrados);

let pares = numeros.filter(item => item % 2 == 0);
console.log(pares);

let sumatorio = numeros.reduce( (total, item) => total + item );
console.log(sumatorio);

let letras = ["a","b","c"];
let palabra = letras.reduce( (total, item) => total + item );
console.log(palabra); // abc
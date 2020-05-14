"use strict";

// ----------- Rest parameters -----------

// A partir del tercer número que le llega por parámetro (si lo hubiera),
// "los comprime" todos construyendo un array y agrupándolos dentro

function otroSumatorio(principio, fin, ...masNumeros) {
	let i;
	let total;

	total = principio + fin + masNumeros.reduce( (total, numero) => total + numero );

	return total;
}

console.log(otroSumatorio(1, 6, false, 7, 5, 2, 7, 6, 8)); // 42

// ----------- Spread operator -----------

// A partir del array pasado por parámetro, "lo expande" generando
// tantos parámetros a pasar a la función como elementos del array

let losNumeros = [7,5,2,7,6,8];

console.log(otroSumatorio(1, 6, false, ...losNumeros)); // 42

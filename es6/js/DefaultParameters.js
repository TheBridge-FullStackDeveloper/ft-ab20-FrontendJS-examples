"use strict";

console.log(sumatorio(1, 6)); // 21
console.log(sumatorio(1, 6, false)); // 7
console.log(sumatorio(1, 6, false, [7])); // 14
console.log(sumatorio(1, 6, false, [7, 8])); // 22

function sumatorio(principio, fin, modoClasico = true, masNumeros = null) {
	let i;
	let total;

	if( modoClasico ) { // Classic version
		total = principio;

		for (i = principio + 1; i <= fin; i++) {
			total += i;
		}
	}
	else { // Other versions
		total = principio + fin;

		if( masNumeros !== null ) {
			total += masNumeros.reduce( (total, numero) => total + numero );
		}
	}

	return total;
}

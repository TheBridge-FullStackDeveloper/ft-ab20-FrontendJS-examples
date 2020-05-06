
let miEdad = 0; // number
let miNombre = ""; // string
let misAficiones = []; // Array
let miArma = {}; // Object

miEdad = 38; // LITERAL (hardcoded)
miNombre = "Aragorn";
misAficiones = [
	"Matar orcos",
	"Beber hidromiel",
	"Recitar poemas en élfico a Arwen"
];

miArma = {
	nombre: "Andúril",
	ataque: 30,
	defensa: 25,
	resistencia: 80,
	atacar: function() {
		return this.ataque;
	},
	defender: function() {
		this.resistencia--;

		return this.defensa;
	}
};

console.log(miArma.nombre); // "Andúril"
console.log(miArma.atacar()); // 30

console.log(miArma.resistencia); // 80
console.log(miArma.defender()); // 25
console.log(miArma.resistencia); // 79

// -------------------------------------------------

function sumar(num1, num2) {
	return num1 + num2;
}
/*
let sumar = function(num1, num2) {
	return num1 + num2;
}
*/
let resultado = sumar(2, 3);
console.log( resultado ); // 5

/* ---------------------------------------- */
/* 22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
*/

let suma = function(num1, num2) {
				return num1 + num2;
			};

let resta = function(num1, num2) {
				return num1 - num2;
			};

let multiplicacion = function(num1, num2) {
						return num1 * num2;
					};

let arrayFunciones = [ suma, resta, multiplicacion ];

console.log( arrayFunciones[0](4, 6) ); // 10
//console.log( suma(4, 6) );

/*
let laVerdad = true;

if( !laVerdad ) {
//if( laVerdad != true ) {
//if( laVerdad == false ) {

}
else {

}

let edad = 14;

if( edad >= 18 && cuotaPagada ) {
	console.log("Puedes pasar");
}

if( "2" === 2 ) {
	// ...
}

let cadena = "0" + 38; // 038
*/

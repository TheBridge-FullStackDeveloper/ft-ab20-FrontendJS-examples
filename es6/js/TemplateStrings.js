"use strict";

/* ------------ Global stuff & initializations ------------ */

// hardcoded
const personas = [{
	nombre: "Jane Doe",
	edad: 43,
	genero: "M"
},
{
	nombre: "John Doe",
	edad: 37,
	genero: "H"
}];

const ini = 1, fin = 6;

let tratamiento;
let persona;
let formal;
let saludo;

/* ------------ Main program ------------ */

// -- Input
formal = confirm("¿Informal (Cancelar) o formal (Aceptar)?");
persona = personas[1];

// -- Process
if( formal ) {
	if( persona.genero == "M" ) {
		tratamiento = "Doña";
	}
	else {
		tratamiento = "Don";
	}
}
else {
	tratamiento = "";
}

// -- Output
//saludo = "Hola, " + tratamiento + " " + persona.nombre; // ES5
saludo = `Hola, ${ tratamiento } ${ persona.nombre }, el sumatorio de ${ ini }
          y ${ fin } es ${ sumatorio( ini, fin ) }`;

// backticks `` --> INTERPRETA partes de mi string

document.querySelector('body').innerHTML = saludo;

/* ----------- Handler Functions ----------- */

function checkData(event) {

	event.preventDefault();

	let isAlright = true;
	let myForm = document.getElementById("signup-form");
	//let myForm = document.forms["signup-form"];

	let myEmail = document.getElementById("user-email");
	//let myEmail = document.forms["signup-form"]["user-email"];

	let myEmailFeedback = "";
	document.getElementById("user-email-feedback").innerText = "";

	// Comprueba todas las reglas de validación establecidas

	if( myEmail.value == "" ) { // Is empty
		isAlright = false;
		myEmailFeedback = "Está vacío. Rellénalo, pliz";
	}
	else
	if( myEmail.value.length > 256 || myEmail.value.length < 12 ) { // Is out of range
		isAlright = false;
		myEmailFeedback = "Está fuera de rango. Mete algo entre 12 y 256 caracteres, por favor";
	}
	// ...

	// Si todo va bien...
	if( isAlright ) {
		// --> Envía los datos al action por el método definido
		myForm.submit();
	}
	// Si no...
	else {
		// --> No enviar nada y dar feedback al usuario (lo que está mal)
		document.getElementById("user-email-feedback").innerText = myEmailFeedback;
		// ...
	}
}

/* ----------- Event Listeners ----------- */

document.getElementById("signup-form").addEventListener("submit", function(event) {
	checkData(event);
});

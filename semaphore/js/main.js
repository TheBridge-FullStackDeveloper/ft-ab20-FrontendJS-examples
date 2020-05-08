
/* ----------- Global variables ----------- */
/* ----------- (Initialization) ----------- */
// document.getElementById("light1").style.backgroundColor = "red"; // WRONG!!!
let lightsOn = [ false, false ];

/* ----------- Handler Functions ----------- */

// Change light color (toggling between red and green)
function toggleColor(lightTarget, lightIndex) {
	// if light off --> light on
	if( !lightsOn[lightIndex] ) {
		lightsOn[lightIndex] = true;

		document.getElementById(lightTarget).style.backgroundColor = "green";
	}
	// else --> off light
	else {
		lightsOn[lightIndex] = false;

		document.getElementById(lightTarget).style.backgroundColor = "red";
	}
}

function noLink(event) {
	event.preventDefault();
}

/* ----------- Event Listeners ----------- */
/* ----------- (Binding) ----------- */
document.getElementById("light1").addEventListener("click", function() {
	toggleColor("light1",0);
	alert("La luz 1 se cambia");
});

document.getElementById("light2").addEventListener("click", function() {
	toggleColor("light2",1);
	alert("La luz 2 se cambia");
});

let lazyLinks = document.getElementsByClassName("lazyLink"); // Targeting

for (let i=0; i < lazyLinks.length; i++) {
	lazyLinks[i].addEventListener("click", function() { noLink(event) });
}

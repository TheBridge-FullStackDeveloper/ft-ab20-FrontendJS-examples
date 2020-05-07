/*
console.log("Todo va bien");
console.error("#VamosAMorirTodos #PeroNoHoy");

window.confirm("Eres mayor de edad??");
*/

let myTitle = document.getElementById("main-title");
myTitle.style.color = "#65a2bc";
myTitle.style.backgroundColor = "orange";
myTitle.className = "center";

let myLink = document.getElementById("todayworld");
myLink.href = "http://...";

let myFruits = document.getElementsByClassName("fruits");
myFruits[1].style.color = "";

/* ----------------- Events & Handlers ----------------- */

// Way 1: Anonymous callback function

document.getElementById("fruit2").addEventListener("mouseover", function() {
	document.getElementById("fruit2").style.opacity = "0";
});

// Way 2: Predeclared handler function w/ JS listener

let show = function() {
	document.getElementById("fruit2").style.opacity = "1";
}
document.getElementById("fruit2").addEventListener("mouseout", show);

// Way 3: Predeclared handler function wo/ JS listener (inline HTML)

function destroySiblings() {
	document.getElementById("fruit2").previousElementSibling.style.display = "none";
	document.getElementById("fruit2").nextElementSibling.style.display = "none";
}

"use strict";

let myPromise = new Promise((resolve, reject) => {

    // Alguna operación que es ASÍNCRONA

    setTimeout(function(){
        resolve("Hola"); // ¡Todo salió bien!
    }, 1000);

    // Y si el reloj peta...
        // reject(); // Algo salió mal!
});

myPromise
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch(() => {
        console.log("Fallo! El tiempo se ha parado!");
    });


// wo/ async/await syntax
function pedirDatos() {
  fetch('/endpoint')
    .then((response) => response.json())
    .then((data) => console.log(data) );
}

// w/ async/await syntax
async function pedirDatosAsync() {
  let response = await fetch('/endpoint');
  let data = await response.json();
  console.log(data);
}

//pedirDatos();
//pedirDatosAsync();
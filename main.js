// function funcionAEjecutar(){
//     alert("hola")
// }
// const cambioDefondo = document.getElementById("nombre")

// function cambiacolor1() {
//     cambioDefondo.style.backgroundColor = "red";
// }

// function cambiacolor2() {
//     cambioDefondo.style.backgroundColor = "blue";
// }
function buenosDias() {
    document.getElementById("nombre").style.backgroundColor = "orange";
    document.getElementById("image1").style.display = "block";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    alert("Buenos Días");
}

function buenasTardes() {
    document.getElementById("nombre").style.backgroundColor = "yellow";
    document.getElementById("image2").style.display = "block"
    document.getElementById("image1").style.display = "none";
    document.getElementById("image3").style.display = "none";
    alert("Buenas Tardes");
}
function buenasNoches() {
    document.getElementById("nombre").style.backgroundColor = "darkblue";
    document.getElementById("image3").style.display = "block";
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    alert("Buenas Noches");  
}
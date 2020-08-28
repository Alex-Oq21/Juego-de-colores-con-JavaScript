var numeroCuadros = 6;
var colores = ["rgb(255, 0, 0)", "rgb(255, 0, 255)", "rgb(255, 225, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"];
var SeleccionColor;
var cuadrados = document.querySelectorAll(".cuadrado");
var botonReiniciar = document.querySelector("#reiniciar");
var botonesModos = document.querySelector(".modo")

systemMessageDisplay.innerHTML = SeleccionColor;
for (i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgorundColor = colores[i]
}

//Evtno click
for (i = 0; i <= cuadrados.length; i++) {
    cuadrados[i].addEventListener('click', function() {
        alert('opción clikeada');
    })
}
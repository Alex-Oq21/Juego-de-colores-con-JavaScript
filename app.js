var numSquare = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var systemMessageDisplay = document.querySelector("#default-code");
var userMessageDisplay = document.querySelector("#user-code");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var header = document.querySelector("#header");
var colors = generateRandomColors(6);
pickedColor = pickColor();


systemMessageDisplay.innerHTML = pickedColor;
for (i = 0; i < squares.length; i++) {
    //Aplica color a los cuadros
    squares[i].style.backgroundColor = colors[i]
        //Evento click en los cuadros
    squares[i].addEventListener('click', function() {
        //Mostrar valor actual
        userMessageDisplay.innerHTML = this.style.backgroundColor;
        //Selecciona el color correcto
        var clickedColor = this.style.backgroundColor;
        //Comprobar si el color seleccionado coincide
        if (pickedColor === clickedColor) {
            header.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
        }
        //Si el usuario selecciona el color incorrecto
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.text = "Color incorrecto";
        }
    })
};

function changeColors(color) {
    for (i = 0; i <= squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    console.log("pickColor");
    return colors[random];
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
}

function generateRandomColors(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}
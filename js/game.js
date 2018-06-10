var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var message = document.getElementById('message');
var headerElement = document.getElementById('headerbg');

// target the span
var span = document.querySelector('span');
span.textContent = pickedColor.toUpperCase();

// loop through
for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    // addClickEvent
    squares[i].addEventListener('click', function(){

        // grep the selected color
        var selectedColor = this.style.backgroundColor;
        if( selectedColor === pickedColor){
            message.textContent = "Correct!!!";

            // change the colors
            changeColor(selectedColor)
            headerElement.style.backgroundColor = selectedColor;
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!!!";
        }
    });

}

function changeColor(color){
    // loop through all squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

}
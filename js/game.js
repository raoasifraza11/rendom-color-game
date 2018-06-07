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

// target the span
var span = document.querySelector('span');
span.innerText = pickedColor.toUpperCase();
span.style.color = pickedColor;

// loop through
for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    // addClickEvent
    squares[i].addEventListener('click', function(){

        // grep the selected color
        var selectedColor = this.style.backgroundColor;
        if( selectedColor === pickedColor){
            console.log("Correct!");
        }else{
            console.log("Wrong!!!");
        }
    });

}
/*S Kargel
2023/05/14
Javascript Challenge
*/

var canvas ;
var context;

canvas = document.getElementById("canvas");
    
let bound = canvas.getBoundingClientRect();

let xOff = bound.left + window.scrollX;
let yOff = bound.top + window.scrollY;


showMousePos();

//Do this when the window first loads
window.onload = function() {

    
    canvas.height = 800;
    canvas.width = 1200;

    context = canvas.getContext("2d");

    mainMenu();
    showMousePos();
    
}

function mainMenu() {
        //Easy Button
        context.fillStyle="black";
        context.fillRect(500,500,200,75);
        context.fillStyle="white";
        context.fillRect(500+2,500+2,200-4,75-4);
        
        //Hard Button
    
        context.fillStyle="black";
        context.fillRect(500,400,200,75);
        context.fillStyle="white";
        context.fillRect(500+2,400+2,200-4,75-4);

        
}

//Show the mouse Position
function showMousePos() {
    // Get the HTML element to display the mouse position
    const mousePosition = document.querySelector('#mouse-position');

    // Add an listener to the document to track mouse movement
    document.addEventListener('mousemove', function(event) {
    // Get the mouse position from the event object
    const x = event.clientX;
    const y = event.clientY;

    // Update the HTML with the mouse position
    mousePosition.innerHTML = `Mouse position: (${x-xOff}, ${y-yOff})`;
    });
}


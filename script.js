/*S Kargel
2023/05/14
Javascript Challenge
*/


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let bound = canvas.getBoundingClientRect();

let xOff = bound.left + window.scrollX;
let yOff = bound.top + window.scrollY;


showMousePos();

//Do this when the window first loads
window.onload = function() {

    
    canvas.height = 800;
    canvas.width = 1200;

    

    mainMenu();
    showMousePos();
    
}

function mainMenu() {

        //Create the rectangles for the button
        //Easy Button rect
        ctx.fillStyle="black";
        ctx.fillRect(500,500,200,75);
        ctx.fillStyle="white";
        ctx.fillRect(500+2,500+2,200-4,75-4);
        //Hard Button rect
        ctx.fillStyle="black";
        ctx.fillRect(500,400,200,75);
        ctx.fillStyle="white";
        ctx.fillRect(500+2,400+2,200-4,75-4);
        //Create the button text
        ctx.fillStyle="black";
        ctx.font = "36px arial";

        ctx.fillText("Easy", 560, 450); //Text for the easy mode button
        ctx.fillText("Hard", 560, 550); //Text for the hard mode button

        window.addEventListener("keydown", function (e) {
            document.querySelector("p").innerHTML = `You pressed ${e.key}`;
          }, false);
        

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


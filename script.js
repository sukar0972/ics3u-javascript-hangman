

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
    mousePosition.innerHTML = `Mouse position: (${x}, ${y})`;
    });
}

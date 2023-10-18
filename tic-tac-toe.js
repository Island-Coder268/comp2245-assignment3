// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all the divs inside the game board (with the ID "board")
    let squares = document.querySelectorAll('#board > div');
    
    // Loop through each square and add the 'square' class
    squares.forEach(function(square) {
        square.classList.add('square');
    });
});

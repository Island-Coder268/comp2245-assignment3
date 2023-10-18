// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all the divs inside the game board (with the ID "board")
    let squares = document.querySelectorAll('#board > div');
    
    // Define a variable to track the current player. Start with 'X'
    let currentPlayer = 'X';

    // Define an empty array to keep track of the game state
    let gameState = ['', '', '', '', '', '', '', '', ''];

    // Loop through each square
    squares.forEach(function(square, index) {
        square.classList.add('square');

        // Add a click event listener to each square
        square.addEventListener('click', function() {
            // Check if the square is already occupied. If not, then proceed
            if (square.textContent === '') {
                // Set the content of the square to the current player (either 'X' or 'O')
                square.textContent = currentPlayer;

                // Add the class 'X' or 'O' for styling
                square.classList.add(currentPlayer);

                // Update the game state
                gameState[index] = currentPlayer;

                // Switch the current player for the next turn
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});

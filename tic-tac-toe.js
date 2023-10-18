document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';

    squares.forEach(function(square, index) {
        // Add the basic 'square' class to style each square
        square.classList.add('square');

        // Click event listener to add X or O
        square.addEventListener('click', function() {
            // If the square is empty, put either X or O
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Switch to the other player for the next turn
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        // Mouseover event listener to show the hover effect
        square.addEventListener('mouseover', function() {
            if (square.textContent === '') {
                square.classList.add('hover');
            }
        });

        // Mouseout event listener to remove the hover effect
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });
});

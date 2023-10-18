document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    let currentPlayer = 'X';
    let moves = 0;  // To keep track of the number of moves made.

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(square => {
        // Add the basic 'square' class to style each square
        square.classList.add('square');

        // Click event listener to add X or O
        square.addEventListener('click', function() {
            if (!square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                moves++;

                if (checkWinner(currentPlayer)) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                } else if (moves === 9) {
                    status.textContent = "It's a Tie!";
                } else {
                    // Switch to the other player for the next turn
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        // Mouseover event listener to show the hover effect
        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });

        // Mouseout event listener to remove the hover effect
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    function checkWinner(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => squares[index].textContent === player);
        });
    }
});

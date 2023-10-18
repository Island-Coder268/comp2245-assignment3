document.addEventListener('DOMContentLoaded', function() {
    let squares = document.querySelectorAll('#board > div');
    let status = document.getElementById('status');
    let currentPlayer = 'X';

    // Initial styling for the squares
    squares.forEach(square => {
        square.classList.add('square');
    });

    // Add click event for each square
    squares.forEach(square => {
        square.addEventListener('click', function() {
            // Check if square is empty before placing X or O
            if (!square.classList.contains('X') && !square.classList.contains('O')) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                if (checkWinner(currentPlayer)) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';  // Alternate between X and O
                }
            }
        });

        // Hover effect for the square
        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    // Reset game state when New Game button is clicked
    document.querySelector('.btn').addEventListener('click', function() {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        currentPlayer = 'X';  // Reset to default player
    });

    // Check for a winner
    function checkWinner(player) {
        // Winning combinations
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            if (squares[combo[0]].textContent === player &&
                squares[combo[1]].textContent === player &&
                squares[combo[2]].textContent === player) {
                return true;
            }
        }
        return false;
    }
});

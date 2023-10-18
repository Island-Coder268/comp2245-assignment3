document.addEventListener("DOMContentLoaded", function() {
    
    // Initial board setup
    let squares = document.querySelectorAll("#board div");
    squares.forEach(function(square) {
        square.classList.add("square");
    });

    // Variables to manage the game state
    let currentPlayer = "X";
    let boardState = Array(9).fill(""); // 3x3 board represented as 1D array

    // Function to check for a winning move
    function checkWinner(player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return boardState[index] === player;
            });
        });
    }

    // Event listener to handle moves
    squares.forEach(function(square, index) {
        square.addEventListener("click", function() {
            if (!square.classList.contains("X") && !square.classList.contains("O")) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                boardState[index] = currentPlayer;
                if (checkWinner(currentPlayer)) {
                    const status = document.getElementById("status");
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add("you-won");
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Add hover effect
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });

    // New Game button logic
    let newGameBtn = document.querySelector(".btn");
    let status = document.getElementById("status");

    newGameBtn.addEventListener("click", function() {
        squares.forEach(function(square) {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");

        boardState.fill("");
        currentPlayer = "X";
    });
});

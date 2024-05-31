let randomNumber = Math.floor(Math.random() * 50) + 1;
let score = 0;
let gameOver = false;

document.getElementById("play_again").onclick = reset;

function checksAnswer(number) {
    // this is an event listener for each number
    // so each number will know when it has been clicked on
    if(!gameOver) {
        const playerGuess = number.innerHTML;
        gameMessage = document.getElementById("game_message");
        if(playerGuess < randomNumber) {
            gameMessage.innerHTML = `The number is greater than ${playerGuess}`;
        } else if(randomNumber < playerGuess) {
            gameMessage.innerHTML = `The number is less than ${playerGuess}`;
        } else {
            gameOver = true;
            gameMessage.innerHTML = `That's correct! The number is ${randomNumber}`;
            const playAgain = document.createElement("p");
            playAgain.innerHTML = "Can you guess the trick to get a better score? If so, play again!"
            gameMessage.appendChild(playAgain);
        }
        // when player guesses the number, it should go red
        if(playerGuess != randomNumber) {
            number.style.backgroundColor = "red";
            number.style.border = "solid 2px red";
        } else {
            number.style.backgroundColor = "green";
            number.style.border = "solid 2px green";
        }
        score += 1;
        const scoreElement = document.getElementById("score");
        scoreElement.innerHTML = `Score: ${score}`;
    }
}

function reset() {
    // chooses new random number
    randomNumber = Math.floor(Math.random() * 50) + 1;
    // reset score
    score = 0;
    // reset game state
    gameOver = false;
    const scoreElement = document.getElementById("score");
    scoreElement.innerHTML = `Score:`;
    // reset message
    gameMessage = document.getElementById("game_message");
    gameMessage.innerHTML = "";
    // reset blocks
    const board = document.getElementById("game_board");
    board.innerHTML = "";
    intializeBoard();
}


function intializeBoard() {
    // get the game board
    const board = document.getElementById("game_board");
    for(let row = 0; row <= 4; row++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row";
        for(let col = row * 10 + 1; col <= (row * 10) + 10; col++) {
            const number = document.createElement("div");
            number.addEventListener('click', e => checksAnswer(e.target));
            number.className = "number";
            number.innerHTML = col;
            rowElement.appendChild(number);
        }
        board.appendChild(rowElement);
    }
}

 
intializeBoard();


let gameOver = false;
let turn = "X";

// reset button


function changeTurn() {
    // each time the player goes, the turn switches from X to O and from O to X
}

// if the square is empty, then change the picture
function validTurn(block) {
    // when the player clicks on a square, a picture appears
    // make sure that it's the picture of their turn (Player 1 has X and Player 2 has O)
}

function clickBlock(block) {
    if(!gameOver) {
        validTurn(block);
        win();
    }
}

function reset() {
    turn = "X";
    gameOver = false;
    blocks = document.getElementsByClassName("block");
    for(let i = 0; i < blocks.length; i++) {
        blocks[i].removeAttribute("src");
    }
    const winElement = document.getElementById("winner");
    if(winElement) {
        winElement.remove();
    }
}


function win() {
    const row1 = document.getElementById("row_1").children;
    const row2 = document.getElementById("row_2").children;
    const row3 = document.getElementById("row_3").children;

    // all in row_1
    const win1 = (row1[0].src == row1[1].src) && (row1[0].src == row1[2].src) && row1[0].src !== "";
    // all in row_2
    const win2 = (row2[0].src == row2[1].src) && (row2[0].src == row2[2].src) && row2[0].src !== "";
    // all in row_3
    const win3 = (row3[0].src == row3[1].src) && (row3[0].src == row3[2].src) && row3[0].src !== "";

    // all in col_1
    const win4 = (row1[0].src == row2[0].src) && (row1[0].src == row3[0].src) && row1[0].src !== "";
    // all in col_2
    const win5 = (row1[1].src == row2[1].src) && (row1[1].src == row3[1].src) && row1[1].src !== "";
    // all in col_3
    const win6 = (row1[2].src == row2[2].src) && (row1[2].src == row3[2].src) && row1[2].src !== "";

    // diagonal left
    const win7 = (row1[0].src == row2[1].src) && (row1[0].src == row3[2].src) && row1[0].src !== "";
    // diagonal right
    const win8 = (row1[2].src == row2[1].src) && (row1[2].src == row3[0].src) && row1[2].src !== "";

    if(win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
        gameOver = true;
        // add a winner announcement
        const winner = document.createElement("h2");
        winner.id = "winner";
        winner.innerHTML = `Winner: ${turn}`;
        document.getElementById("game_message").appendChild(winner);  
    } else {
        changeTurn();
    }
}


function initializeBlocks() {
    blocks = document.getElementsByClassName("block");
    for(let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('click', e => clickBlock(e.target));
    }
}


initializeBlocks();
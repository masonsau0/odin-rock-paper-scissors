/* 
    make the computer choose rock, paper, or scissors at random
    get user input of rock, paper, or scissors
    check both computer and user choice and decide winner based on choices
    repeat steps if  computer and user choose same option
*/

const computerSelection = computerPlay();

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;     // random number between 1-3
    switch (computerChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function userPlay() {
   let userSelection =  prompt("Type rock, paper, or scissors to select move.");
   userSelection = userSelection.toLowerCase() 
}

function playRound(userSelection, computerSelection) {
    if (userSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a tie!");
            replayRound();
        } else if (computerSelection === "paper") {
            console.log("You lose!");
        } else {
            console.log("You win!");
        }
    }

    if (userSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win!");
        } else if (computerSelection === "paper") {
            replayRound();
        } else {
            console.log("You lose!");
        }
    }

    if (userSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose!");
        } else if (computerSelection === "paper") {
            console.log("You win!");
        } else {
            replayRound();
        }
    }
}

function replayRound() {
    computerPlay();
    playRound();
}

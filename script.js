/* 
    make the computer choose rock, paper, or scissors at random
    get user input of rock, paper, or scissors
    check both computer and user choice and decide winner based on choices
    repeat steps if  computer and user choose same option
    make the game 5 rounds long 
*/
let userScore = 0;
let computerScore = 0;
function game() {
    for (let i = 1; i <= 5; i++) {
        userPlay();
        computerPlay();
        playRound();
    }
    if (userScore > computerScore) {
        console.log(`You won ${userScore}-${computerScore}!`);
    }

}
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

const userSelection = userPlay();
function userPlay() {
   userSelection.toLowerCase() =  prompt("Type rock, paper, or scissors to select move.");
   
}

function playRound(userSelection, computerSelection) {
    if (userSelection === "rock") {
        if (computerSelection === "rock") {
            console.log(
                `It's a tie! 
                Score: ${userScore}-${computerScore}`);
            replayRound();
        } else if (computerSelection === "paper") {
            console.log(
                `You lose, paper beats rock!
                Score: ${userScore}-${computerScore}`);
            computerScore++;
        } else {
            console.log(
                `You win, rock beats scissors! 
                Score: ${userScore}-${computerScore}`);
            userScore++;
        }
    }

    if (userSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(
                `You win, paper beats rock! 
                Score: ${userScore}-${computerScore}`);
            userScore++;
        } else if (computerSelection === "paper") {
            console.log(
                `It's a tie! 
                Score: ${userScore}-${computerScore}`);
            replayRound();
        } else {
            console.log(
                `You lose, scissors beats paper!
                Score: ${userScore}-${computerScore}`);
            computerScore++;
        }
    }

    if (userSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log(
                `You lose, rock beats scissors!
                Score: ${userScore}-${computerScore}`);
            computerScore++;
        } else if (computerSelection === "paper") {
            console.log(
                `You win, paper beats rock! 
                Score: ${userScore}-${computerScore}`);
            userScore++;
        } else {
            console.log(
                `It's a tie! 
                Score: ${userScore}-${computerScore}`);
            replayRound();
        }
    }
}

function replayRound() {
    userPlay();
    computerPlay();
    playRound();
}

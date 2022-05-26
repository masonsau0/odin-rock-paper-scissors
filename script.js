/* 
    make the computer choose rock, paper, or scissors at random
    get user input of rock, paper, or scissors
    check both computer and user choice and decide winner based on choices
    repeat steps if  computer and user choose same option
    make the game 5 rounds long 
    create function to start game
*/
let computerSelection;
let userSelection;
let userScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function clickListener(event) {
    const userSelection = event.target.id;
    const computerSelection = computerPlay();
    playRound(userSelection, computerSelection);

    if (userScore === 5 || computerScore === 5) {
        declareWinner();
      }
 }

 rockButton.addEventListener("click", clickListener);
 paperButton.addEventListener("click", clickListener);
 scissorsButton.addEventListener("click", clickListener);

function declareWinner() {
    if (userScore > computerScore) {
        console.log(`--- GAME OVER ---
        You win ${userScore}-${computerScore}!`);
        userScore = 0;
        computerScore = 0;
    } else {
        console.log(`--- GAME OVER ---
        You win ${userScore}-${computerScore}!`);
        userScore = 0;
        computerScore = 0;
    }
}

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

// function userPlay() {
//    let userChoice =  prompt("Type rock, paper, or scissors to select move.");
//    userChoice = userChoice.toLowerCase();
//     while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
//         console.log("Invalid move, try again.");
//         userChoice =  prompt("Type rock, paper, or scissors to select move.");
//         userChoice = userChoice.toLowerCase();
//      }
//     return userChoice.toLowerCase();
// }

function playRound(userSelection, computerSelection) {
    // computerSelection = computerPlay();
    //  userSelection = userSelection.toLowerCase();
    if (userSelection === "rock") {
        if (computerSelection === "rock") {
            console.log(
                `It's a tie! 
                Score: ${userScore}-${computerScore}`);
            replayRound();
        } else if (computerSelection === "paper") {
            computerScore++;
            console.log(
                `You lose, paper beats rock!
                Score: ${userScore}-${computerScore}`);
        } else {
            userScore++;
            console.log(
                `You win, rock beats scissors! 
                Score: ${userScore}-${computerScore}`);
        }
    }

    if (userSelection === "paper") {
        if (computerSelection === "rock") {
            userScore++;
            console.log(
                `You win, paper beats rock! 
                Score: ${userScore}-${computerScore}`);
        } else if (computerSelection === "paper") {
            console.log(
                `It's a tie! 
                Score: ${userScore}-${computerScore}`);
            replayRound();
        } else {
            computerScore++;
            console.log(
                `You lose, scissors beats paper!
                Score: ${userScore}-${computerScore}`);
        }
    }

    if (userSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            console.log(
                `You lose, rock beats scissors!
                Score: ${userScore}-${computerScore}`);
        } else if (computerSelection === "paper") {
            userScore++;
            console.log(
                `You win, paper beats rock! 
                Score: ${userScore}-${computerScore}`);
        } else {
            console.log(
                `It's a tie! 
                Score: ${userScore}-${computerScore}`);
            replayRound();
        }
    }
}

function replayRound() {
    playRound();
}






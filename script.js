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
const scoreMessage = document.querySelector('#score-message')     // get a reference to the 'score-message' div

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


function playRound(userSelection, computerSelection) {
    if (userSelection === "rock") {
        if (computerSelection === "rock") {
            scoreMessage.textContent = `It's a tie! Score: ${userScore}-${computerScore}`;
            replayRound();
        } else if (computerSelection === "paper") {
            computerScore++;
            scoreMessage.textContent = `You lose, paper beats rock! Score: ${userScore}-${computerScore}`;
        } else {
            userScore++;
            scoreMessage.textContent = `You win, rock beats scissors! Score: ${userScore}-${computerScore}`;
        }
    }

    if (userSelection === "paper") {
        if (computerSelection === "rock") {
            userScore++;
            scoreMessage.textContent = `You win, paper beats rock! Score: ${userScore}-${computerScore}`;
        } else if (computerSelection === "paper") {
            scoreMessage.textContent = `It's a tie! Score: ${userScore}-${computerScore}`;
            replayRound();
        } else {
            computerScore++;
            scoreMessage.textContent = `You lose, scissors beats paper! Score: ${userScore}-${computerScore}`;
        }
    }

    if (userSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            scoreMessage.textContent = `You lose, rock beats scissors! Score: ${userScore}-${computerScore}`;
        } else if (computerSelection === "paper") {
            userScore++;
            scoreMessage.textContent = `You win, paper beats rock! Score: ${userScore}-${computerScore}`;
        } else {
            scoreMessage.textContent = `It's a tie! Score: ${userScore}-${computerScore}`;
            replayRound();
        }
    }
}

function replayRound() {
    playRound();
}

function declareWinner() {
    if (userScore > computerScore) {
        scoreMessage.textContent = `--- GAME OVER ---
         You win ${userScore}-${computerScore}!`;
        userScore = 0;
        computerScore = 0;
    } else {
        scoreMessage.textContent = `--- GAME OVER ---
         You lose ${userScore}-${computerScore}!`;
        userScore = 0;
        computerScore = 0;
    }
}








/* 
    make the computer choose rock, paper, or scissors at random
    get user input of rock, paper, or scissors
    check both computer and user choice and decide winner based on choices
    repeat steps if  computer and user choose same option
*/

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

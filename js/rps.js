let playerSelection = "scissors";

function getComputerChoise() {
    let x = Math.floor(Math.random() * 3 + 1);
    console.log(x);
    switch(x) {
        case 1:
            //x = "rock"
            return x;
            break;
        case 2:
            //x = "paper"
            return x;
            break;
        case 3:
            //x = "scissors"
            return x;
            break;
    }
}

function playRound(playerSelection, getComputerChoise) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        if(playerSelection == "rock" && getComputerChoise == 2) {
            console.log("You lose! Paper beats Rock.");
        }else if(playerSelection == "rock" && getComputerChoise == 3) {
            console.log("You win! Rock beats Scissors.");
        }else if(playerSelection == "paper" && getComputerChoise == 1) {
            console.log("You win! Paper beats Rock.");
        }else if(playerSelection == "paper" && getComputerChoise == 3) {
            console.log("You lose! Scissors beats Paper.");
        }else if(playerSelection == "scissors" && getComputerChoise == 1) {
            console.log("You lose! Rock beats Scissors.");
        }else if(playerSelection == "scissors" && getComputerChoise == 2) {
            console.log("You win! Scissors beats Paper.");
        }else{
            console.log("It's a tie. Please reload the page.");
        }
    }else{
        console.log("Please only input rock, paper or scissors and reload the page.");
    }
    
}

playRound(playerSelection, getComputerChoise());
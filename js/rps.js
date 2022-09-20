let pCount = 0;
let cCount = 0;
let playerSelection;
let roundNumber = 1;
const buttons = document.querySelectorAll("button");

function getComputerChoise(){
    return Math.floor(Math.random() * 3 + 1);
}

function playRound(playerSelection, getComputerChoise){
    const winner = document.querySelector(".winner");
    const roundWinner = document.querySelector(".round-winner");
    if(playerSelection == "button-rock" && getComputerChoise == 2){
        cCount++;
        roundWinner.textContent = "You lose this round! Paper beats Rock.";
    }else if(playerSelection == "button-rock" && getComputerChoise == 3){
        pCount++;
        roundWinner.textContent = "You win this round! Rock beats Scissors.";
    }else if(playerSelection == "button-paper" && getComputerChoise == 1){
        pCount++;
        roundWinner.textContent = "You win this round! Paper beats Rock.";
    }else if(playerSelection == "button-paper" && getComputerChoise == 3){
        cCount++;
        roundWinner.textContent = "You lose this round! Scissors beats Paper.";
    }else if(playerSelection == "button-scissors" && getComputerChoise == 1){
        cCount++;
        roundWinner.textContent = "You lose this round! Rock beats Scissors.";
    }else if(playerSelection == "button-scissors" && getComputerChoise == 2){
        pCount++;
        roundWinner.textContent = "You win this round! Scissors beats Paper.";
    }else{
        roundWinner.textContent = "This round is a tie.";
    }
    let playerCount = document.querySelector(".player-count");
    let compCount = document.querySelector(".comp-count");
    playerCount.textContent = `Player: ${pCount}`;
    compCount.textContent = `Computer: ${cCount}`;
    if(pCount == 5 || cCount == 5){
        buttons.forEach((button) => {
            button.disabled = true;
        });
        if(pCount > cCount){
            winner.textContent = "You win the game! Please reload the page.";
        }else if(pCount < cCount){
            winner.textContent = "You lose the game! Please reload the page."
        }else{
            winner.textContent = "The game is a tie.";
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.className;
        playRound(playerSelection, getComputerChoise());
        roundNumber++;
        const roundCount = document.querySelector(".round-count");
        roundCount.textContent = `Round: ${roundNumber}`;
        
        
    });
});

/*function game(){
    let i = 1;
    while(i <= 5){
        let playerSelection = prompt("Please enter rock, paper or scissors");
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            playRound(playerSelection, getComputerChoise());
            i++;
        }else{
            console.log("Please only enter rock, paper or scissors.");
        }
    }

    if(pCount > cCount){
        console.log("You win the game! \nYour Points: " + pCount + "\nComputer: " + cCount);
    }else if(pCount < cCount){
        console.log("You lose the game! \nYour Points: " + pCount + "\nComputer: " + cCount);
    }else{
        console.log("It's a tie. \nYour Points: " + pCount + "\nComputer: " + cCount);
    }
}

game();*/
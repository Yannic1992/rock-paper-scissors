let pCount = 0;
let cCount = 0;

function getComputerChoise(){
    return Math.floor(Math.random() * 3 + 1);
}

function playRound(playerSelection, getComputerChoise){
    if(playerSelection == "rock" && getComputerChoise == 2){
        cCount++;
        console.log("You lose this round! Paper beats Rock.");
    }else if(playerSelection == "rock" && getComputerChoise == 3){
        pCount++;
        console.log("You win this round! Rock beats Scissors.");
    }else if(playerSelection == "paper" && getComputerChoise == 1){
        pCount++;
        console.log("You win this round! Paper beats Rock.");
    }else if(playerSelection == "paper" && getComputerChoise == 3){
        cCount++;
        console.log("You lose this round! Scissors beats Paper.");
    }else if(playerSelection == "scissors" && getComputerChoise == 1){
        cCount++;
        console.log("You lose this round! Rock beats Scissors.");
    }else if(playerSelection == "scissors" && getComputerChoise == 2){
        pCount++;
        console.log("You win this round! Scissors beats Paper.");
    }else{
        console.log("This round is a tie.");
    }
    
    
}

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
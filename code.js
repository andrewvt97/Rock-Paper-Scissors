game();

// This is the code for the Rock, Paper, Scissors game.
function game(){
    let PlayerScore = 0;
    let ComputerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        console.log("You chose " + playerSelection + "!");
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result[1]);
        if (result[0] === 1) {
            PlayerScore++;
        }
        else if (result[0] === -1) {
            ComputerScore++;
        }
        console.log("Here are the current scores - " + "You: " + PlayerScore + " Computer: " + ComputerScore);
    }
    if (PlayerScore > ComputerScore) {
        console.log("Congrats! You win the game!");
    }
    else if(PlayerScore < ComputerScore) {
        console.log("That was a terrible performance, you lose the game.");
    }
    else{
        console.log("No one wins! Tie game.");
    }
}

// The function that plays a round of Rock, Paper, Scissors
function playRound(playerChoice, ComputerChoice) { 
    if (playerChoice === 'rock') {
        if (ComputerChoice === 'rock') {
            return [0,'Tie!'];
        }
        else if (ComputerChoice === 'paper'){
            return [-1,'You lose this round! Paper beats rock.'];
        }
        else {
            return [1, 'You win this round! Rock beats scissors.'];
        }
    } 
    if (playerChoice === 'paper') {
        if (ComputerChoice === 'rock') {
            return [1, 'You win this round! Paper beats rock.'];
        }
        else if (ComputerChoice === 'paper'){
            return [0,'Tie!'];
        }
        else {
            return [-1, 'You lose this round! Scissors beats paper.'];
        }
    } 
    if (playerChoice === 'scissors') {
        if (ComputerChoice === 'rock') {
            return [-1, 'You lose this round! Rock beats scissors.'];
        }
        else if (ComputerChoice === 'paper'){
            return [1, 'You win this round! Scissors beats paper.'];
        }
        else {
            return [0,'Tie!'];
        }
    } 
}

// This function returns a random choice for the computer
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3); // returns a random integer from 0 to 2

    // returns 'rock', 'paper', or 'scissors' based on the value of num
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else { 
        return 'scissors';
    }
}


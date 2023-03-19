

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


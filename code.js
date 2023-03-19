
function playRound(playerChoice, ComputerChoice) {
    if (playerChoice.toLowerCase() === 'rock') {
        if (ComputerChoice === 'rock') {
            return 'Tie!';
        }
        else if (ComputerChoice === 'paper'){
            return 'You lose! Paper beats rock.';
        }
        else {
            return 'You win! Rock beats scissors.';
        }
    } 
    if (playerChoice.toLowerCase() === 'paper') {
        if (ComputerChoice === 'rock') {
            return 'You win! Paper beats rock.';
        }
        else if (ComputerChoice === 'paper'){
            return 'Tie!';
        }
        else {
            return 'You lose! Scissors beats paper.';
        }
    } 
    if (playerChoice.toLowerCase() === 'scissors') {
        if (ComputerChoice === 'rock') {
            return 'You lose! Rock beats scissors.';
        }
        else if (ComputerChoice === 'paper'){
            return 'You win! Scissors beats paper.';
        }
        else {
            return 'Tie!';
        }
    } 
}


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


const buttons = document.querySelectorAll('.option');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Get the player's choice
        let playerScore = 0;
        let computerScore = 0;
        const playerChoice = e.target.id;
        // Get the computer's choice
        const computerChoice = getComputerChoice();
        // Play a round of Rock, Paper, Scissors
        const result = playRound(playerChoice, computerChoice);
        const container = document.querySelector('.result');
        const roundResult = document.createElement('p');
        roundResult.textContent = result[1];
        container.appendChild(roundResult);
        const currentScore = document.createElement('p');
        currentScore.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
        container.appendChild(currentScore);
      
    });
});



// This is the code for the Rock, Paper, Scissors game.


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


const buttons = document.querySelectorAll('.option');
const container = document.querySelector('.result');

let roundResult; // declare before so function doesn't create a new element
let currentScore; // declare before so function doesn't create a new element
let playerScore = 0, computerScore = 0;
let condition = true;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Get the player's choice
        if (playerScore === 5 || computerScore === 5) {
            let gameResult = document.createElement('p');
            if (condition){
                if (playerScore === 5) {
                    gameResult.textContent = "You win! That was amazing.";
                } else {
                    gameResult.textContent = "You lose! That was terrible.";
                }
                container.appendChild(gameResult);
            }
            condition = false;
            return
        }
        const playerChoice = e.target.id;
        // Play a round of Rock, Paper, Scissors
        const result = playRound(playerChoice);
        // Display the result
        if(!roundResult){
        roundResult = document.createElement('p');
        roundResult.textContent = result[1];
        container.appendChild(roundResult);
        } else {
            roundResult.textContent = result[1];
        }
        if (result[0] === 1) {
            playerScore++;
        }
        else if (result[0] === -1) {
            computerScore++;
        }
        // Display the current score
        if(!currentScore){
            currentScore = document.createElement('p');
            currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
            container.appendChild(currentScore);
        } else {
            currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        }


    });
});


// This is the code for the Rock, Paper, Scissors game.


// The function that plays a round of Rock, Paper, Scissors
function playRound(playerChoice) { 
    computerChoice = getComputerChoice();
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return [0,'Tie!'];
        }
        else if (computerChoice === 'paper'){
            return [-1,'You lose this round! Paper beats rock.'];
        }
        else {
            return [1, 'You win this round! Rock beats scissors.'];
        }
    } 
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return [1, 'You win this round! Paper beats rock.'];
        }
        else if (computerChoice === 'paper'){
            return [0,'Tie!'];
        }
        else {
            return [-1, 'You lose this round! Scissors beats paper.'];
        }
    } 
    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return [-1, 'You lose this round! Rock beats scissors.'];
        }
        else if (computerChoice === 'paper'){
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


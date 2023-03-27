const buttons = document.querySelectorAll('.option');
const container = document.querySelector('.result');
let roundResult = document.querySelector(".message");
let currentScore = document.querySelector(".score");
let outputContainer = document.createElement('div');

let playerScore = 0, computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Get the player's choice
        if (playerScore === 5 || computerScore === 5) {
            return
        }
        const playerChoice = e.target.id;
        // Play a round of Rock, Paper, Scissors
        const result = playRound(playerChoice);
        // Display the result
        if(!roundResult){
        roundResult.textContent = result[1];
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
        
        currentScore.textContent = `Current Score: Player: ${playerScore} Computer: ${computerScore}`;
        

        if (playerScore === 5 || computerScore === 5) {
            outputContainer.setAttribute('style', 'display: flex; gap: 20px; align-items: center; justify-content: center;')
            let gameResult = document.createElement('p');
                if (playerScore === 5) {
                    gameResult.textContent = "You win! That was amazing.";
                } else {
                    gameResult.textContent = "You lose! That was terrible.";
                }
                gameResult.classList.add('game-message');
                outputContainer.appendChild(gameResult);

                let newGame = document.createElement('button');
                newGame.textContent = 'New Game';
                newGame.classList.add('new-game');
                outputContainer.appendChild(newGame);

            container.appendChild(outputContainer);
            eventListener(newGame);
    
        }
    });
});


function eventListener(newGame) {
    newGame.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        roundResult.textContent = "Click on any of the icons to start."; // should mostly use null instead of undefined
        currentScore.textContent = "Current Score: Player: 0 Computer: 0";
        const count = outputContainer.childElementCount;
        for (let i = 0; i < count; i++) {
            outputContainer.removeChild(outputContainer.lastElementChild);
        }
    })
}







// This is the code for the Rock, Paper, Scissors game.


// The function that plays a round of Rock, Paper, Scissors
function playRound(playerChoice) { 
    const computerChoice = getComputerChoice();
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return [0,'Tie! You both picked rock.'];
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
            return [0,'Tie! You both picked paper.'];
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
            return [0,'Tie! You both picked scissors.'];
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


function getComputerChoice() {
    const guessName = ['Rock', 'Paper', 'Scissors'];
    let randomGuess = '';

    //Randomly genratig Rock, Paper, Scissors name
    for (let i = 0; i < 1; i++) {
        randomGuess += guessName[Math.floor(Math.random() * 3)];
    }
    return randomGuess;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection} `;
    } else {
        return `You loose! Computer wins ${computerSelection} beats ${playerSelection}`;
    }
}
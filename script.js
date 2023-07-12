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

function game() {
    let humanScore = 0;
    let computerScore = 0;
    let tieGame = 0;
    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt('Enter your choice');
        let computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${result}`);

        if (result.includes('You win')) {
            humanScore++;
        } else if (result.includes('Computer wins')) {
            computerScore++;
        } else if (result.includes('tie')) {
            tieGame++;
        }
    }
    console.log(
        `Final score: Human = ${humanScore}, Computer = ${computerScore}, Tie = ${tieGame}`
    );

    if (humanScore > computerScore) {
        console.log(`congrtulations human wins!`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins against human! `);
    } else {
        console.log(`The game ends in a tie.`);
    }

    // }
}
game();

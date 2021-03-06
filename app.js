console.log("Let's Play");

let userName = prompt("What's Your Name?");
while(!userName) {
    alert('Please Enter Your Name!');
    userName = prompt("What's Your Name?");
    if (userName) {
        welcome = alert(`Hello, ${userName}.  it's a great Nameπ!! Let's play!`);
        break;
    }
}
// parseInt() -> returns an integer.
let playerScore = parseInt(0);
let computerScore = parseInt(0);
const SELECTION = ['rock', 'paper', 'scissors'];

// takes the user input

let userSelection

const playerSelection = () => {
    userSelection = prompt('Enter your Selection π, πͺ¨, or βοΈ?').toLowerCase(); // case-insensitive
    while(!SELECTION.includes(userSelection)) {
        alert('Please Enter a Vaild Value, You should pick one of π, πͺ¨, or βοΈ!');
        userSelection = prompt('Enter your Selection π, πͺ¨, or βοΈ?')//.toLowerCase();  case-insensitive
        if (SELECTION.includes(userSelection)) return false;
    }
    console.log(`${userName}: ${userSelection}`);
    return userSelection;
}

const computerSelection = () => {
    let randmSelection = Math.floor(Math.random() * SELECTION.length);
    console.log(`Computer: ${SELECTION[randmSelection]}`);
    return SELECTION[randmSelection];
}

const winMassege = (odd1, odd2) => {
    console.log(`You Won π`);
} 

const loseMassege = (odd1, odd2) => {
    console.log(`You Lost π­`);
} 

function results(playerSelection, computerSelection) {
    // ROCK ODDS
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            playerScore++;
            winMassege("Paper", "Rock");
        } else if (playerSelection === "scissors") {
            computerScore++;
            loseMassege("Rock", "Scissors");
        } else {
            console.log(`It's a drawπ!`);
        }
    }

    // PAPER ODDS
    if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            playerScore++;
            winMassege("Scissors", "Paper");
        } else if (playerSelection === "rock") {
            computerScore++;
            loseMassege("Paper", "Rock");
        } else {
            console.log(`It's a drawπ!`);
        }
    }

    // SCISSORS ODDS
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            playerScore++;
            winMassege("Rock", "Scissors");
        } else if (playerSelection === "paper") {
            computerScore++;
            loseMassege("Scissors", "Paper");
        } else {
            console.log(`It's a drawπ!`);
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        

        console.log(`Round: ${i + 1}`)
        const player = playerSelection();
        const computer = computerSelection();
        results(player, computer);
        console.log(`Computer's score = ${computerScore}, Your Score = ${playerScore}`);

        
    }
    if (computerScore > playerScore) {
        console.log(`You're the loser. π₯!!!!`)
    } else if (computerScore < playerScore) {
        console.log(`You're the winner. π!!!!!`)
    } else {
        console.log(`It's draw π!!!!!`)
    }
}

// Run the game
game();
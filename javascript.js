function getComputerChoice() {
    let decider = "";
    let yoNumber = Math.random();
    if (yoNumber <= 1/3) {
        decider = "rock"
    } else if (yoNumber <= 2/3) {
        decider = "paper"
    } else {
        decider = "scissors"
    }
    computerChoice = decider
    console.log(yoNumber)
    console.log(`Computer chose: ${decider}`)
    return decider;
}

function getHumanChoice() {
    let userChoice = prompt("Enter rock, paper or scissors: ")

    if (userChoice === null) {
        console.log("Prompt cancelled. Round Skipped.");
        return null
    }
    userChoice = userChoice.trim().toLowerCase();
    const selection = ["rock", "paper", "scissors"];
    if (selection.includes(userChoice)){
        console.log("Human chose: " + userChoice)
        return userChoice;
    } else {
        console.log("You must enter 'rock', 'paper', or 'scissors'!")
        return null;
    }
}

let humanScore = 0
let computerScore = 0

let humanChoice = ""
let computerChoice = ""

function incrementUser() {
    humanScore++
    console.log("User wins!")
    scoreTotal()
    return "user"
}

function incrementComputer() {
    computerScore++
    console.log("Computer wins!")
    scoreTotal()
    return "computer"
}

function tieNoPoints() {
    console.log('Tie! No points awarded!')
    scoreTotal()
    return "tie"
}

function scoreTotal(){
    console.log(`Humanscore is: ${humanScore} to Computer Score: ${computerScore}`)
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return tieNoPoints();
        } else if (computerChoice === "paper") {
            return incrementComputer();
        } else {
            return incrementUser();
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            return incrementUser();
        } else if (computerChoice === "paper") {
            return tieNoPoints();
        } else {
            return incrementComputer();
        }
    } else {
        if (computerChoice === "rock") {
            return incrementComputer();
        } else if (computerChoice === "paper") {
            return incrementUser();
        } else {
            return tieNoPoints();
        }
    }
}

for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    if (humanChoice === null){
        console.log("\nInvalid input, round skipped.\n");
        i--;
        continue;
    }
    let computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    if (result === "tie") {
        i--;
        continue;
    }
}

if (humanScore > computerScore) {
    console.log(`Human wins! with: ${humanScore} to the Computers: ${computerScore}`)
} else {
    console.log(`Human loses! with: ${humanScore} to the Computers: ${computerScore}`)
}


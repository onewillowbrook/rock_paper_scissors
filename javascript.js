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
    let userChoice = prompt()
    userChoice = userChoice.trim().toLowerCase();
    let selection = ["rock", "paper", "scissors"];
    if (selection.includes(userChoice)){
        console.log("User choice: " + userChoice)
        return userChoice;
    } else {
        console.log("You must enter 'rock', 'paper', or 'scissors'!")
        return null;
    }
    humanChoice = userChoice
    return userChoice;
}

let humanScore = 0
let computerScore = 0

humanChoice = ""
computerChoice = ""

function incrementUser() {
    humanScore++
    console.log("User wins!")
    scoreTotal()
}

function incrementComputer() {
    computerScore++
    console.log("Computer wins!")
    scoreTotal()
}

function tieNoPoints() {
    console.log('Tie! No points awarded!')
    scoreTotal()
    
}

function scoreTotal(){
    console.log(`Humanscore is: ${humanScore} to Computer Score: ${computerScore}`)
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            tieNoPoints()
        } else if (computerChoice === "paper") {
            incrementComputer()
        } else {
            incrementUser()
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            incrementUser()
        } else if (computerChoice === "paper") {
            tieNoPoints()
        } else {
            incrementComputer()
        }
    } else {
        if (computerChoice === "rock") {
            incrementComputer()
        } else if (computerChoice === "paper") {
            incrementUser()
        } else {
            tieNoPoints()
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
    playRound(humanChoice, computerChoice);
}

if (humanScore > computerScore) {
    console.log(`Human wins! with: ${humanScore} to the Computers: ${computerScore}`)
} else {
    console.log(`Human loses! with: ${humanScore} to the Computers: ${computerScore}`)
}


// console.log("Hello world!");

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
    console.log(yoNumber)
    console.log(decider)
}

function getHumanChoice() {
    let userChoice = prompt()
    userChoice = userChoice.trim().toLowerCase();
    let selection = ["rock", "paper", "scissors"];
    if (selection.includes(userChoice)){
        if (userChoice == "rock") {
            userChoice = "rock"
        } else if (userChoice == "paper") {
            userChoice = "paper"
        } else {
            userChoice = "scissors"
        }
        console.log("User choice: " + userChoice)
    } else {
        console.log("You must enter 'rock', 'paper', or 'scissors'!")
    }
}

let humanScore = 0
let computerScore = 0

getComputerChoice();
getHumanChoice();

function incrementUser() {
    humanScore =+
    console.log("User wins!")
}

function incrementComputer() {
    computerScore =+
    console.log("Computer wins!")
}

function tieNoPoints() {
    console.log('Tie! No points awarded!')
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
    } else if (humanScore === "paper") {
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

// console.log(Math.random());
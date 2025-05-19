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

getComputerChoice();
getHumanChoice();

// console.log(Math.random());
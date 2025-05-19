console.log("Hello world!");

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


console.log(getComputerChoice());

// console.log(Math.random());
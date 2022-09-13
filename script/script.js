const options = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let choice = Math.round(Math.random() * 2)
    return options[choice]
}
function checkPlayerChoice(string){
    string = string.toLowerCase().split("")
    string[0] = string[0].toUpperCase()
    return string.join("")
    // if(options.includes(choice)){
    //     return choice
    // } else {
    //     return "Something went wrong"
    // }

}

function playRound(playerSelection, computerSelection){
    console.log(`\nYour choice: ${playerSelection} \nComputer choice: ${computerSelection}`)
    if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            return "You won this round!"
        } else if (computerSelection == "Scissors"){
            return "You lose this time..."
        } else {
            return "Oh, it's a draw."
        }
    } else if (playerSelection == "Rock") {
        if(computerSelection == "Rock"){
            return "Oh, it's a draw."
        } else if (computerSelection == "Scissors"){
            return "You won this round!"
        } else {
            return "You lose this time..."
        }
    } else if(playerSelection == "Scissors"){
        if(computerSelection == "Rock"){
            return "You lose this time..."
        } else if (computerSelection == "Scissors"){
            return "Oh, it's a draw."
        } else {
            return "You won this round!"
        }
    } else{
        return "Something went wrong... See if there's a typo"
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Please, make your choice: (rock, Paper or Scissors) ")
        console.log(playRound(checkPlayerChoice(playerChoice), getComputerChoice()))
    }
}

game()

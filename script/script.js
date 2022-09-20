let playerChoiceDisplay = document.querySelector("#player-choice")
const cpuChoiceDisplay = document.querySelector("#cpu-choice")
const roundResultDisplay = document.querySelector("#round-result")
let container = document.querySelector("#container")
let playerScore = 0
let cpuScore = 0

const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        playRound(button.value, getComputerChoice())
    })
})

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]
    let choice = Math.round(Math.random() * 2)
    return options[choice]
}
function setScore() {
    let playerScoreDisplay = document.querySelector("#player-score")
    let cpuScoreDisplay = document.querySelector("#cpu-score")

    playerScoreDisplay.textContent = playerScore
    cpuScoreDisplay.textContent = cpuScore
}

function playRound(playerSelection, computerSelection){
    playerChoiceDisplay.textContent = `You chose: ${playerSelection}`
    cpuChoiceDisplay.textContent = `Cpu chose: ${computerSelection}`

    if(playerSelection == computerSelection){
        roundResultDisplay.textContent = "It's a tie"

    } else if (playerSelection == "Rock" && computerSelection == "Scissors" 
    || playerSelection == "Paper" && computerSelection == "Rock" 
    || playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++
        roundResultDisplay.textContent = "You won this round"

    } else if (playerSelection == "Scissors" && computerSelection == "Rock"
    || playerSelection == "Rock" && computerSelection == "Paper" 
    || playerSelection == "Papper" && computerSelection == "Scissors"){
        cpuScore++
        roundResultDisplay.textContent = "You lose this round"
    } else {
        return "Something went wrong"
    }
    setScore()
    checkScore()
}

function resetScore(){
    cpuScore = 0
    playerScore = 0
}
function checkScore(){
    if(cpuScore === 5){
        resetScore()
        roundResultDisplay.textContent = "You lose this game... How sad..."
    } else if (playerScore === 5){
        resetScore()
        roundResultDisplay.textContent = "You won five rounds! Congratulations"
    }
}

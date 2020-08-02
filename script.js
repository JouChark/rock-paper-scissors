let playerSelection 
let computerSelection
let playerScore = 0
let computerScore = 0
let res = document.getElementById('res')
let score = document.getElementById('score')
let fRes = document.getElementById('fRes')
let imgR = document.getElementById('imgR')
let imgL = document.getElementById('imgL')
let btn = document.querySelectorAll('button.value')
let btnRes = document.querySelector('button#reset-button')

btn.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        playRound()
    })
})

btnRes.addEventListener('click', () => {
    resetGame()
})

function computerPlay() {
    let comPlayRan = Math.floor(Math.random() * 3)
    switch(comPlayRan) {
        case 0:
            return 'Rock'
            break;
        case 1:
            return 'Paper'
            break
        case 2:
            return 'Scissors';
            break
    }
}

function playRound() {
    if (playerScore < 5 && computerScore < 5) {
        computerSelection = computerPlay()
        showResult()
    }
    if (playerScore === 5 || computerScore === 5) {
        gameOver()
    }
}

function getResult(ps, cs) {
    if (ps === cs) {
        return `Draw!`
    } else if((ps === 'Rock' && cs === 'Scissors') ||
              (ps === 'Paper' && cs === 'Rock') || 
              (ps === 'Scissors' && cs === 'Paper')) {
                    playerScore++
                    return `${ps} beats ${cs}.`
    } else if ((ps === 'Rock' && cs === 'Paper') ||
               (ps === 'Paper' && cs === 'Scissors') ||
               (ps === 'Scissors' && cs === 'Rock')){
                    computerScore ++
                    return `${cs} beats ${ps}.`
    }
}

function showResult() {
    res.innerHTML = getResult(playerSelection, computerSelection)
    score.innerHTML = `<p><strong>Player</strong></p> <p>${playerScore} X ${computerScore}</p>
                    <p><strong>IA<strong></p>`
    imgL.setAttribute("src", changeImageL(playerSelection))
    imgR.setAttribute("src", changeImageR(computerSelection))
    if (playerScore === 5 || computerScore === 5) {
        fRes.textContent = getFinalScore(playerScore, computerScore)
    }
}

function changeImageL(imgL) {
    if (imgL === 'Rock') {
        return "images/rock.png"
    }
    if (imgL === 'Paper') {
        return "images/paper.png"
    }
    if (imgL === 'Scissors') {
        return "images/scissors.png"
    }
}

function changeImageR(imgR) {
    if (imgR === 'Rock') {
        return "images/rock.png"
    }
    if (imgR === 'Paper') {
        return "images/paper.png"
    }
    if (imgR === 'Scissors') {
        return "images/scissors.png"
    }
}

function getFinalScore(playerScore, computerScore) {
    if(playerScore > computerScore){
        return 'You Win!'
    } else if(computerScore > playerScore) {
        return 'You Lose!'
    }
}

function gameOver() {
    let oldDiv = document.querySelector('div#choice')
    let newDiv = document.querySelector('div#reset')
    oldDiv.setAttribute('id', 'reset')
    newDiv.setAttribute('id', 'choice')
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    res.innerHTML = 'Make Your Choice'
    fRes.textContent = "Let's Play"
    score.innerHTML = `<p><strong>Player</strong></p> <p>0 X 0</p>
                    <p><strong>IA<strong></p>`
    imgL.setAttribute("src", '')
    imgR.setAttribute("src", '')
    gameOver()
}
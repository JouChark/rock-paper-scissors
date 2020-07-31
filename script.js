let turn = 0
let playerScore = 0
let computerScore = 0

function getInputValue(inputVal){
    let computerSelection = computerPlay()
    let playerSelection = inputVal
    let res = document.getElementById('res')
    let imgR = document.getElementById('imgR')
    let imgL = document.getElementById('imgL')
    let cont = document.getElementById('cont')
    let fRes = document.getElementById('fRes')
    if (turn < 5) {
        turn++
        res.innerHTML = playRound(playerSelection, computerSelection)
        cont.innerHTML = `Player ${playerScore} X ${computerScore} IA`
        imgL.setAttribute("src", changeImageL(playerSelection))
        imgR.setAttribute("src", changeImageR(computerSelection))
    } else {
        fRes.innerHTML = finalScore(playerScore, computerScore)
    }
}

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

function playRound(playerSelection, computerSelection) {
    let cs = computerSelection
    let ps = playerSelection
    if (ps === cs) {
        return `Draw!`
    } else if((ps === 'Rock' && cs === 'Scissors') || (ps === 'Paper' && cs === 'Rock') || (ps === 'Scissors' && cs === 'Paper')) {
        playerScore++
        return `${ps} beats ${cs}.`
    } else if ((ps === 'Rock' && cs === 'Paper') || (ps === 'Paper' && cs === 'Scissors') || (ps === 'Scissors' && cs === 'Rock')){
        computerScore ++
        return `${cs} beats ${ps}.`
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

function finalScore(playerScore, computerScore) {
    if(playerScore > computerScore){
        return 'You Win!'
    } else if(computerScore > playerScore) {
        return 'You Lose!'
    } else {return "It's a Draw!"}
}
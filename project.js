let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let hasBJ = false
let isAlive = false
let sum = 0 
let cards = []
function startGame(){
    let firstCard = randomNum()
    let secondCard = randomNum()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    contGame()
}

function contGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 20){
        message = "Do you want to draw another Card?"
        isAlive = true
    }else if(sum === 21){
        message = "That's BlackJack My bro!"
        hasBJ = true
    }else{
        message = "You've lost Bro"
        isAlive = false
    }
    messageEl.textContent = message
}

function randomNum(){
    let num = Math.floor(Math.random()*13) + 1
    return num
}

function newCard(){
    if(isAlive === true && hasBJ === false){
        let card = randomNum()
        cards.push(card)
        sum += card
        contGame()
    }
}
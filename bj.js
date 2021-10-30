let startEl = document.querySelector("#start")
let cardsEl = document.querySelector("#cards")
let sumEl = document.querySelector("#sum")
let resultEl = document.querySelector("#result")
let newCardEl = document.querySelector("#draw-card")

let cards = []
let sum = 0
let message = ""
let hasBj = false
let isAlive = false

startEl.addEventListener("click",function(){
    isAlive = true
    let firstCard = randomNum()
    let secondCard = randomNum()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    contGame()
})



function contGame(){
    if(sum < 21){
        message = "Draw a New Card"
        isAlive =  true
    }else if(sum === 21){
        message = "BlackJack!!!"
        isAlive = false
        hasBj = true
    }else{
        message = "You've Lost"
        isAlive = false
    }
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] +", "
    }
    sumEl.textContent = "Sum: "
    sumEl.textContent += sum
    resultEl.textContent = message
    }


function randomNum(){
    return Math.floor(Math.random() * 13) + 1
}

newCardEl.addEventListener("click", function(){
    if(isAlive === true && hasBj === false){
        let card = randomNum()
        sum += card 
        cards.push(card)
        contGame()
    } 
})

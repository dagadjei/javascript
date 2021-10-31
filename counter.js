let count = 0
let value = document.querySelector("#value")
let btn = document.querySelectorAll(".btn")

btn.forEach(function(operands){
    operands.addEventListener("click",function(operation){
        styles = operation.currentTarget.classList
        if(styles.contains("decrease")){
            count--
        }else if(styles.contains("increase")){
            count++
        }else{
            count = 0
        }
        if(count<0){
            value.style.color = "red"
        }else if(count>0){
            value.style.color = "green"
        }else{
            value.style.color = "black"
        }
        value.textContent = count
    })
})
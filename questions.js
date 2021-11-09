const btnEl = document.querySelectorAll(".question-btn")

btnEl.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const log = e.currentTarget.parentElement.parentElement
        log.classList.toggle("show-text")
    })
})
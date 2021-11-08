let toggleBtn = document.querySelector(".sidebar-toggle")
let links = document.querySelector(".links")
let closeBtn = document.querySelector(".closeBtn")

toggleBtn.addEventListener("click", function(){
    links.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", function(){
    links.classList.remove("show-sidebar")
})
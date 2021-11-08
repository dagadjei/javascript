let toggleBtn = document.querySelector(".sidebar-toggle")
let links = document.querySelector(".links")
let closeBtn = document.querySelector(".closeBtn")



closeBtn.addEventListener("click", function(){
    links.classList.remove("show-sidebar")
})
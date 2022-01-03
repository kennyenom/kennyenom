const btn = document.getElementById("menu-btn")
const navMenu = document.getElementById("menu")

function navToggle(){
    btn.classList.toggle("open")
    navMenu.classList.toggle("hidden")
}
btn.addEventListener("click",navToggle)
const icon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

icon.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
})
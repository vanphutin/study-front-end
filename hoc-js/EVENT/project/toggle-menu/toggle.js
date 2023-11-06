const toggleMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", handleToggle);

function handleToggle(e){
    e.target.classList.toggle("fa-times");
    e.target.classList.toggle("fa-bars")
    menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOut);
function handleClickOut(e){
    if(!menu.contains(e.target) && e.target !== toggleMenu){
        menu.classList.remove("is-show");
        toggleMenu.classList.remove("fa-times");
        toggleMenu.classList.add("fa-bars");
    }
}
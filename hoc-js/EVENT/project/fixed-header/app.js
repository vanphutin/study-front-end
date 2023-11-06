const menu = document.querySelector("#menu")
window.addEventListener("scroll", fixedFunc);
function fixedFunc(e){
    if(window.scrollY > 125.999){
        menu.classList.add("fixed");
    }if(window.scrollY >200){
        document.body.innerHTML = `<span class="len">^</span>`;
        
    }
}
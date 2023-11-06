const header = document.querySelector("#menu");
const progressBar = document.querySelector(".progress-bar");


window.addEventListener("scroll", handleScroll);
function handleScroll(e){
    // console.log(scrollY);
    if(scrollY > 200){
        header.classList.add("fixed");
    }else if(scrollY < 199){
        header.classList.remove("fixed")
    }
    
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const width = (scrollY / height) * 100;
    progressBar.style.width = `${width}%`;
}
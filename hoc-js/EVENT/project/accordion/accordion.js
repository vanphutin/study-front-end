const  accordion = document.querySelectorAll(".accordion");

[...accordion].forEach(item => item.addEventListener("click", handleClick));
function handleClick(e){
    const content = e.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle("is-active");
    if(!content.classList.contains("is-active")){
        content.style.height = "0px"
    }
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");

}
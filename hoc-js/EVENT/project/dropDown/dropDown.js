const dropDown = document.querySelector(".dropdown__select");
const dropList = document.querySelector(".dropdown__list");
const getDropDown = document.querySelector(".dropdown__selected");
const dropItems = document.querySelectorAll(".dropdown__item");
const iconDrop = document.querySelector(".dropdown__caret");

const dropDownElement = document.querySelector(".dropdown")
dropDown.addEventListener("click", function(e){
    dropList.classList.toggle("show");
    iconDrop.classList.toggle("fa-caret-up")
});
dropItems.forEach((item) => {
    item.addEventListener("click", function(e){
        const getText = e.target.querySelector(".dropdown__text").textContent;
        getDropDown.textContent = getText;
        dropList.classList.remove("show");
    })
})
document.addEventListener("click", function(e){
    if(!dropDownElement.contains(e.target)){
        dropList.classList.remove("show");
    }
})
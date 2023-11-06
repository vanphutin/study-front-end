const button = document.querySelector("button");
const pElement = document.querySelector("p")
const color = ["#FF0000", "#0000FF", " #008000", " #FFFF00", " #FFA500", " #800080", "#FFC0CB", "#808080"];

button.addEventListener("click", changeColor);
let flag;
function changeColor(){
    const randomColor = color[Math.floor(Math.random() * color.length)];
    console.log("click");
    if(flag !== randomColor){
        button.parentElement.style.backgroundColor = randomColor;
        pElement.style.color = randomColor;
    }
    flag = randomColor;
}
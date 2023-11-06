const pev = document.querySelector(".pev");
const mid = document.querySelector(".mid");
const next = document.querySelector(".next");

let countValue = parseInt(mid.textContent);

console.log(countValue);

pev.addEventListener("click", ()=>{
    if(countValue == 1){
        const header = document.querySelector("header");
        const happing = document.createElement("div");
        header.appendChild(happing);
        happing.setAttribute("class", "bithday");
        const pElement = document.createElement("p");
        happing.appendChild(pElement);
        pElement.setAttribute("class", "text")
    }
    countValue ++;
    mid.textContent = countValue;
    console.log(countValue);
});
next.addEventListener("click", ()=>{
    if(countValue === 0 ){
        return 0;
    }
   
    countValue --;
    mid.textContent = countValue;
    console.log(countValue);
});
//---------------- ỎR -----------

/* const mid = document.querySelector(".mid");
let countValue = parseInt(mid.textContent);
console.log(countValue);

function updateCount(newValue) {
    mid.textContent = countValue = newValue;
    console.log(countValue);
}

document.querySelector(".pev").addEventListener("click", () => updateCount(countValue + 1));
document.querySelector(".next").addEventListener("click", () => updateCount(countValue > 0 ? countValue - 1 : 0));  */


const submit = document.querySelector(".form");
const showPass = document.querySelector(".show");
showPass.addEventListener("click", function(e){
    const input = showPass.previousElementSibling;
    const inputType = input.getAttribute("type");
    if(inputType === "password"){
        input.setAttribute("type", "text");
    }else{
        input.setAttribute("type", "password");
    }
    console.log(inputType);
})
/*
<div class="modal-content">
      <span class="close" id="closeModal">&times;</span>
      <p>Nội dung modal ở đây...</p>
    </div>
    */

const buttom = document.getElementById("openModal");
buttom.addEventListener("click", hanldClick);
const temp = `<div id="myModal" class="modal">
                <div class="modal-content">
                <span class="close" id="closeModal">&times;</span>
                <p>Nội dung modal ở đây...</p>
                </div>
            </div>`
function hanldClick(){
    document.body.innerHTML = temp;
}

document.body.addEventListener("click", function(e){
    if(e.target.matches(".close")){
        const modal = document.querySelector(".modal")
        modal.parentNode.removeChild(modal)
    }
    else if(e.target.matches(".modal")){
        const myModal = document.querySelector(".modal");
        myModal.parentNode.removeChild(myModal)
    }
})
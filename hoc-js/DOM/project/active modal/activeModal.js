const modal = document.querySelector(".modal");
const body =document.body;

body.innerHTML = `<div class="modal">
<div class="close-icon">X</div>
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolorum unde officia autem odit doloremque. Voluptas ea ipsam, eligendi hic, quidem atque est quae veritatis nam reprehenderit autem dolor. Veniam dignissimos harum dolorem..</p>
</div>
<div class="buttons">
<button class="button confirm">Confirm</button>
<button class="button cancel">Cancel</button>
</div>
</div>`


if(modal){
    setTimeout( function() {
        modal.classList.add("is-show");
    }, 3000);
}
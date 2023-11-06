window.addEventListener("load", function(e){
    const button = document.querySelector(".button");
    let counter = 0;

    function renderSweetAlert() {
        const template =  ` <div class="sweet-alert">
        <i class="fa fa-check sweet-icon"></i>
        <p class="sweet-text">Congratulations on learning JS</p>
        </div>`;
        document.body.insertAdjacentHTML("beforeend", template);
        counter++;
    }

    button.addEventListener("click", function(e){
        renderSweetAlert();
        const sweetItems = document.querySelectorAll(".sweet-alert");
        if(sweetItems.length > 0){
            setTimeout(function () {
                sweetItems[0].remove();
                counter--;
            }, 2000);
        }
    })
})

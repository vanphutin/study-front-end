window.addEventListener("load", function () {
    const slider = document.querySelector( ".slider");
    const sliderMain = document.querySelector( ".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector( ".slider-next");
    const prevBtn = document.querySelector( ".slider-prev");
    const dotItems = document.querySelectorAll( ".slider-dot-item");
    
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidersLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click",function(){
        handleChangeSlide(1);
    })
    prevBtn.addEventListener("click",function(){
        handleChangeSlide(-1);

    })

    function handleChangeSlide(direction){
        if(direction === 1){
            if(index >= slidersLength - 1) {
                index = slidersLength - 1;
                return;
            } ;
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform : translateX(${positionX}px); `
            index ++;
        }else if(direction === -1){
            if( index <= 0) {
                index =  0 ;
                return;
            } ;
            positionX = positionX + sliderItemWidth;
            console.log(positionX);
            sliderMain.style = `transform : translateX(${positionX}px); `
            index --;
        }
    }
});
const imageWrapper = document.querySelector(".image-wrapper");
const img = document.querySelector(".image");
const imgCover = document.querySelector(".image-cover")
imgCover.addEventListener("mousemove", handleHoverImg);

function handleHoverImg(e){
    const pX = e.pageX;
    console.log(pX);
    imgCover.style = "width:auto; height: 100%; ,max-height : unset; "
    
}
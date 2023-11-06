const img = document.querySelectorAll(".content img");

img.forEach(item => item.addEventListener("click", handleZoomImg));

function handleZoomImg(e){
    const image = e.target.getAttribute("src")
    console.log(e.target);
    const template = `
   <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}"
         alt=""
         class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.body.addEventListener("click", function(e){
    const lightImg = document.querySelector(".lightbox-image");
    if(!lightImg) return ;
    let lightboxSrc = lightImg.getAttribute("src");
        index = [...img].findIndex((item) => item.getAttribute("src") === lightboxSrc);
    
    if(e.target.matches(".lightbox")){
        const lightBox = document.querySelector(".lightbox");
        lightBox.parentNode.removeChild(lightBox)
    }
    else if(e.target.matches(".lightbox-next")){
  

        index ++;
        if(index > img.length - 1) { index = 0} ;
        displayImgSrc(lightImg,index)
    }
    else if(e.target.matches(".lightbox-prev")){
      
      index --;
      if(index == img.length -1 ) { 
        index = 0
      } ;
      displayImgSrc(lightImg,index); 
    }
})

function displayImgSrc(lightImg,index){
    const newSrc = [...img][index].getAttribute("src");
    lightImg.setAttribute("src" , newSrc);
}

function creatNotification(title){
    const body = document.body;
    body.innerHTML = `<div class="notification">
    <div class="left">
        <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    </div>
    <div class="right">
        <div class="top">Course ${title}</div>
        <div class="bottom">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, expedita?</div>
    </div>
</div>`
    
}
const dataRandom = ["javaScript" , "PHP" , "C++", "HTML-CSS" , "REACT.JS" ];
let lastTitle ;
const time = setInterval(()=>{
    const item = document.querySelector(".notification");
    const randomItem = dataRandom[Math.floor(Math.random() * dataRandom.length)]
    if(item){
        clearInterval();
    }
    if(lastTitle !== randomItem){
        creatNotification(randomItem);
    }
    lastTitle = randomItem;
    
    
},4000);
window.addEventListener("load", function(e){
    const song = document.querySelector("#song");
    const playButton = document.querySelector(".player-play");
    const prevButton = document.querySelector(".player-prev");
    const nextButton = document.querySelector(".player-next");
    const playerDuration = document.querySelector(".player-duration");
    const remaining = document.querySelector(".player-remaining");
    const progressBar = document.querySelector("#progress-bar");
    const playerImage = document.querySelector(".player-image");
    let playing = true;
    const list = ["holo.mp3", "summer.mp3", "spark.mp3", "home.mp3"];
    let songIndex = 0;
    playButton.addEventListener("click", hanldeMusicPlay);
    nextButton.addEventListener("click", function (){
        handleChangeMusic(1);
    } );
    prevButton.addEventListener("click", function (){
        handleChangeMusic(-1);
    } )

    function handleChangeMusic(dir){
        if(dir ===1){
            songIndex++;
            if(songIndex > list.length - 1){
                songIndex = 0;
            }
            //list[songIndex]
            song.setAttribute("src", `./audio/${list[songIndex]}`)
            playing = true;
            hanldeMusicPlay();
        }else if(dir === -1){
            songIndex --;
            if(songIndex < 0){
                songIndex = list.length - 1;
            }
            song.setAttribute("src", `./audio/${list[songIndex]}`)
            playing = true;
            hanldeMusicPlay();
        }
    }

    song.addEventListener("ended", function(){
        handleChangeMusic(1);
    });

    function hanldeMusicPlay(){
        if(playing){
            song.play();
            playerImage.classList.add("is-playing");
            playButton.classList.add("fa-pause");
            playing = false;
        }else{
            song.pause();
            playerImage.classList.remove("is-playing");
            playButton.classList.remove("fa-pause");
            playing= true;
        }
    }
    function displayTime(){
        // const duration = song.duration;
        // const currentTime = song.currentTime;
        const {duration,currentTime} = song;
        progressBar.max = duration;
        progressBar.value = currentTime;
        // const minutes = Math.floor(Math.ceil(duration) / 60);
        // const seconds = Math.floor(duration - minutes * 60);
        remaining.textContent = formatTimer(currentTime);
        if(!duration){
            playerDuration.textContent = "0:00";
        }else{
            playerDuration.textContent = formatTimer(duration);
        }
    }
    function formatTimer(number){
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes}:${seconds < 10 ? "0" +  seconds : seconds}`;
    }
    progressBar.addEventListener("change", hanldeDragProgressBar);
    function hanldeDragProgressBar(){
        song.currentTime = progressBar.value;
    }
    const timer = setInterval(displayTime, 500);  
})
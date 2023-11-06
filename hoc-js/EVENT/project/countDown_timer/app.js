const Day = document.querySelector(".days");
const Hours = document.querySelector(".hours");
const Minutes = document.querySelector(".minutes");
const Seconds = document.querySelector(".seconds");

function countDown(date){
    //Tue Nov 20 2023 01:29:04 GMT+0700 (Indochina Time)
    let getDays, getHours, getMinutes, getSeconds;
    const now = new Date();
    const startDate = now.getTime();
    // console.log(startDate); // 1699295535145 -> mili seconds
    const endDate = new Date(date).getTime();
    // console.log(endDate); // 929823453 -> mili seconds
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    if(timeRemaining > 0){
        // 1 ngay = 24h * 60p * 60s = 86400
    getDays = parseInt((timeRemaining / 86400));
    Day.textContent = `0${getDays}`.slice(-2);

    timeRemaining = timeRemaining % 86400;
    getHours = parseInt(timeRemaining / 3600);
    Hours.textContent = `0${getHours}`.slice(-2);

    timeRemaining = timeRemaining % 3600;
    getMinutes = parseInt(timeRemaining / 60);
    Minutes.textContent = `0${getMinutes}`.slice(-2);

    timeRemaining = timeRemaining % 60;
    Seconds.textContent = `0${timeRemaining}`.slice(-2);
    // console.log(timeRemaining);
    }else{
        return ;
    }
    

}
setInterval(function(){
    countDown("Tue Nov 10 2023 01:00:04 GMT+0700 (Indochina Time)");
},1000);
//ham ve thoi gian DATE();
const now = new Date();
console.log(now.getFullYear()); // 2023
//Mon Oct 02 2023 14:26:15
//timezone : GMT+0700 (Indochina Time)
//second: 15
//minute: 26
// hour : 14
//year : 2023
//month : Oct
//day : 02 
// day of the week : mon
const birthday = new Date();
 console.log(birthday.getFullYear()); //2023
 console.log(birthday.getMonth()); // 09, li do : month chay tu so 0 nen-> 0: thang 1 ; 1 : thang 2...
 console.log(birthday.getDate()); // 2 -> in ra ngay cua thang (1 -> 31)
 console.log(birthday.getDay()); //1-> in ra thu cua tuan -> 0 : chu nhat ; 6: thu bay 
 console.log(birthday.getHours()); // in ra gio
 console.log(birthday.getMinutes()); // in ra phut
 console.log(birthday.getSeconds());
 console.log(birthday.getMilliseconds());
 console.log(birthday.getTime());

 // my birtday after update 
birthday.setFullYear(2004);
birthday.setDate(29);
birthday.setMonth(2);
 console.log(`my birthday after update ${birthday}`);
 //befor update :  Sat Oct 02 2023 15:09:27 GMT+0700 (Indochina Time)
//after update : Mon Mar 29 2004 15:11:39 GMT+0700 (Indochina Time)


// DATE STRING

console.log(now.toDateString()); //Mon Oct 02 2023
console.log(now.toTimeString());//15:23:14 GMT+0700 (Indochina Time) 
console.log(now.toLocaleDateString()); //10/2/2023
console.log(now.toLocaleDateString("vi-VI")); //2/10/2023 -> doi sang VIET NAM
console.log(now.toISOString()); //2023-10-02T08:25:26.180Z


// 29/02/2004
const myTime = new Date("Mon Mar 29 2004 15:11:39 GMT+0700 (Indochina Time)"); // 29/2/2004
const myYear = myTime.getFullYear(); // 2004
const myMonth = myTime.getMonth() ; // 2
const myDate = myTime.getDate(); // 29
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`); // 29/02/2004


//BAI TAP
 //1.viet chuoug trinh nhap vao mot nam sinh va in ra so tuoi 
function getAge(year){
    if(typeof year !== 'number') return 0;
    //currentYear - year
    const now = new Date();
    const currentYear = now.getFullYear(); //2023
    return currentYear - year;
}
const yourAge = getAge(2004);
console.log(`tuoi cua ban nam nay ${yourAge}`);

// 2. Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 1 phút nếu chạy về 0 thì thông báo đã hết thời gian - trung bình
function countDonw(minutes = "1"){
    let seconds = minutes * 60 ; //60
    let count = 0;
    const timer = setInterval(function(){
         count = count + 1;
        console.log(count);
        if(count === seconds){
            clearInterval(timer);
            console.log("Your time is end");
        }
    },1000)
}
// countDonw(1);

// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước` - khó
function timeSince(date){
    // current Time - time
    const now = new Date();
    const  yourDate = new Date(date);
    const seconds = Math.floor((now.getTime() - yourDate.getTime())/1000);
    console.log(seconds);
    let timer = seconds / 31536000;
    if(timer > 1){
        console.log(`${Math.floor(timer)} nam truoc`);
        return;
    }
    timer = seconds / 2678400;
    if( timer > 1){
        console.log(`${Math.floor(timer)} thang  truoc`);
        return;
    }
    timer = seconds / 86400;
    if( timer > 1){
        console.log(`${Math.floor(timer)} ngay  truoc`);
        return;
    }
    timer = seconds / 3600;
    if( timer > 1){
        console.log(`${Math.floor(timer)} gio  truoc`);
        return
    }
    timer = seconds / 60;
    if( timer > 1){
        console.log(`${Math.floor(timer)} giay  truoc`);
        return;
    }
    
}
timeSince("Web Oct 04 2023 00:07:53 GMT+0700 (Indochina Time)"); //9 gio truoc

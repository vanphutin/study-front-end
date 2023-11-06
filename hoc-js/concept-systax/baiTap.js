// //---------------ARRAY----------------------
// const arr = [1,4,3,6,8,3,8,9,100];
// //tim index max va min cua mang
// function findMax(arr){
//     var max = arr[0], min = arr[0];
//     for(let i = 0 ; i < arr.length; i++ ){
//         if(arr[i] > max) {
//         max = i;
//         }
//         if(arr[i] < min){
//             min = i;
//         }
//     } 
//     console.log(max);
//     console.log(min);
// }
// // console.log(findMax(arr));

// function tbcArr(arr){
//     let count = 0;
//     let sum = 0;
//     for(let  i = 0; i < arr.length ; i++){
//         sum+=arr[i];
//         count ++;
//     }
//     return (sum / count).toFixed(5);
// }
// // console.log(tbcArr(arr));
// //--------------------------------------------------------------------------------

// // tao mang random
// let arrayRandom = [];

// function arrRandom(arrayRandom) {
//     for (let i = 0; i < 20; i++) {
//         let randomNumbers = Math.floor(Math.random() * 100) + 1;
//         arrayRandom.push(randomNumbers);
//     }
// }

// // arrRandom(arrayRandom);
// // console.log(arrayRandom);    

// //Cho một mảng n số nguyên. Tìm và in ra các số nguyên tố trong mảng.

// function isPrimeNumber(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function findAndPrintPrimes(array) {
//     let foundPrime = false;

//     for (let i = 0; i < array.length; i++) {
//         if (isPrimeNumber(array[i])) {
//             console.log("Số nguyên tố: " + array[i]);
//             foundPrime = true;
//         }
//     }

//     if (!foundPrime) {
//         console.log("Không có số nguyên tố nào được tìm thấy.");
//     }
// }

// // findAndPrintPrimes(arrayRandom);

// /*. bài 1:
//  cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter */
 
// const array = [1,5,7,8,9,15];
// // bài 1.1:* in ra các số chẵn trong mảng

// console.log(array);
// function inChan(array){
//     for(let i = 0 ; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             console.log("cac so chan : " + array[i]);
//         }
//     }
// }
// // inChan(array);

// // bài 1.2: // * in ra các số lẻ  trong mảng

// function soLe(array){
//     for(let i = 0 ; i < array.length; i++){
//         if(array[i] % 2 != 0){
//             console.log("cac so le : " + array[i]);
//         }
//     }
// }
// // soLe(array);

// // bài 1.3:  * in ra các số lớn hơn hoặc bằng 5 trong mảng

// function inLonHonNam(array){
//     for(let i = 0; i< array.length; i++){
//         if(array[i] >= 5){
//             console.log("so lon hon hoac bang 5 la: " + array[i]);
//         }
//     }
// }
// // inLonHonNam(array);

// // bài 1.4:*in ra các số chia hết cho 5 trong mảng

// function inChiaHetNam(array){
//     for(let i =0 ; i < array.length; i++ ){
//         if(array[i] % 5 == 0){
//             console.log("so chia het cho 5 la: " + array[i] );
//         }
//     }
// }
// // inChiaHetNam(array);

// // bài 1.5: Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị

// // inLonHonNam(array);
// function inVaTang(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 5) {
//             array[i] += 1;
//             console.log(`Mảng sau khi cộng 1 cho các số lớn hơn 5: ${array[i]}`);
//         }
//     }
// }

// // inVaTang(array);

// // bài 1.6: dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng

// function coppyArray(array){
//     const newArray = array.slice(3);
//     console.log('copy mảng từ phần tử số 3 đến phần tử cuối cùng: ' + newArray);
// }
// // coppyArray(array);

// // bài 1.7: .splice để xóa 1 phần tử trong mảng
// function xoaPhanTu(array){
//     const newArray = array.splice(2);
//     console.log("xóa phần tử thu 2 trong mảng : " + newArray);
// }
// // xoaPhanTu(array);

// // bài 1.8: .push thêm 1 phần tử vào cuối mảng 

// function themPt(array){
//     const newArray = array.push(20);
//     console.log("thêm phần tử 20 vào cuối mảng : ");
// }
// // themPt(array)
// // console.log(array);

// // bai 1.9: dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30] 
// function tangLen(array){
//     console.log("tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30");
//     for(let i = 0; i < array.length ; i++ ){
//         array[i] += 2;
//         // console.log(array[i]);
//     }
// }
// // tangLen(array);

// // bài 2: cho 6]
// // dùng .sort để sắp xếp mảng tăng dần 
// const newArr =  [1,8,5,2,7,6,9,2,6];
// function tangMang(newArr){
    
//     const sortTang = newArr.sort((a,b) => (a > b ? 1 : -1 ));
//     console.log(" mảng tăng dần : ", sortTang);
//     const sortGiam = newArr.sort((a,b) => (a > b ? -1 : 1 ));
//     console.log(" mảng giam dần : ", sortGiam);

    
    
// }
// // tangMang(newArr);


// //----------------------------DATE--------------------------
// /*Bài 6:
// Cho var phucBirthday = ‘26-11-1992’
// Cho var cuongBirthday= ‘27-11-1994’
// 6.1 Đổi định dạng ngày thành ‘1992-11-26’
// 6.2 Quy đổi về cả 2 về object date
// 6.3 So sánh xem phuc hay cuong lớn tuổi hơn
// 6.4 Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
// 	gợi ý: dùng setDate(getDate + 100)

// 	dùng hàm getDay để tìm ra thứ  biết rằng:
// 	0: chủ nhật
// 	1: thứ 2  ..   */



// // Cho một mảng n số nguyên. Tìm và in ra số âm lớn nhất trong mảng. Nếu dãy không có số phù hợp, in ra “NOT FOUND”.
const newArray1 = [];
function randomArr(newArray1){
    for(let i = 0; i < 20 ; i++){
        const arrRandom = Math.floor((Math.random()) * 200) - 100;
        newArray1.push(arrRandom);
    }
}
randomArr(newArray1)
// console.log(newArray1);

function findAndPrint(newArray1) {
    let largestNegative = null; // Biến để lưu giá trị số âm lớn nhất

    for (let i = 0; i < newArray1.length; i++) {
        if (newArray1[i] < 0) {
            // Nếu phần tử hiện tại là số âm và lớn hơn số âm lớn nhất hiện tại
            if (largestNegative === null || newArray1[i] > largestNegative) {
                largestNegative = newArray1[i]; // Cập nhật giá trị số âm lớn nhất
            }
        }
    }

    if (largestNegative !== null) {
        console.log("Số âm lớn nhất trong mảng là: " + largestNegative);
    } else {
        console.log("Không có số âm trong mảng.");
    }
}

// findAndPrint(newArray1);

// dao nguoc mot chuoi 

function daoChuoi(str){
    if(!str) return null;
    const arrStr = str.split(" ");
    const  daoStr = arrStr.reverse();
    const result = daoStr.join(" ");
    console.log(result);
}
daoChuoi("van phu tin");

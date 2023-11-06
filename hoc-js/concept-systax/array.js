// //ARRAY 1 CHIEU
// const arrList4 = [1,3,4,5,6,7];
// // console.log(numbersList.length); //5
// // console.log(numbersList[2]) //4
// // console.log(numbersList) // [1,2,3,4,5,6,7]

// //ARRAY 2 CHIEU

// const arrList = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// // console.log(arrList.length); //3
// // console.log(arrList);
// // console.log(arrList[1]); //[4,5,6]
// // console.log(arrList[2][1]);//8
// // console.log(Array.isArray(arrList)); // true __ kiem tra phai mang khong 


// // ARRAY Object
// const [first,second,third, ...rest] = [1,2,3,4,5,6,7,8];
//        //1   //2    //3       //[4,5,6,7,8,9]

// // console.log(rest); // 4,5,6,7,8

// // CLONE Array : dung toan tu ...

// const arrayLst2 = [1,2,6,4];
// const cloneArray = [...arrayLst2, 5, 6, 7, 8];
//                     // 1  2  3  4 ...
// cloneArray[3] = 5;
// // console.log(cloneArray);
//             // 1,2,3,5,5,6,7,8



            
// // ES5 forEach
// // forEach là một phương thức của mảng và không trả về giá trị. Nó được sử dụng để duyệt qua từng phần tử của  mảng và thực hiện một hành động trên từng phần tử mà bạn định nghĩa trong hàm callback. forEach không tạo ra một mảng mới hoặc giá trị trả về.
// // arrList4.forEach((x) => {
// //     // console.log(x);
// // } );

// // ES6 for...of
// // for (const element of iterable) {
//      // Code xử lý với element
// // }
// // Trong đó:
// // element là biến mà bạn đặt tên và nó sẽ thay đổi trong từng lần lặp, nó đại diện cho từng phần tử trong      iterable.
// // iterable là một cấu trúc dữ liệu có khả năng lặp qua, chẳng hạn như mảng, chuỗi, Map, hoặc Set.

// // for (const x of numbersList) {
// //     // console.log(x); 
// // }


// // ARRAY OBJECT 
// const arrlist0 =[
//     {
//       id: "1",
//       school: "Dune",
//       class: "1965",
//       fullname: "Frank Herbert",
//       Address: "Unknown",
//       status: "Available"
//     },
//     {
//       id: "2",
//       school: "The Left Hand of Darkness",
//       class: "1969",
//       Fullname: "Ursula K. Le Guin",
//       address: "Unknown",
//       status: "Available"
//     },
//     {
//       Id: "3",
//       school: "Neuromancer",
//       class: "1984",
//       fullname: "William Gibson",
//       address: "Unknown",
//       status: "Available"
//     },
//     {
//       id: "4",
//       school: "Snow Crash",
//       class: "1992",
//       fullname: "Neal Stephenson",
//       address: "Unknown",
//       status: "Available"
//     },
//     {
//       id: "5",
//       school: "Ender's Game",
//       class: "1985",
//       fullname: "Orson Scott Card",
//       address: "Unknown",
//       status: "Available"
//     }
//   ];
  
// // console.log(arrlist4);
// // arrlist4.forEach((x) => {
// //     if(arrlist4.id === 5){
// //         console.log("yes");
// //     }else{
// //         console.log("no");
// //     }                                                                                                           
// // })

// //THEM XOA PHAN TU 

// // const numbersList = [1,3,4,5,6,7];
// // numbersList.push(100);
// // console.log(numbersList); //[1,3,4,5,6,7, 100];

// // numbersList.pop();
// // console.log(numbersList); //[1,3,4,5,6];

// // numbersList.shift();
// // console.log(numbersList);// [3,4,5,6,7];

// // numbersList.unshift(100);
// // console.log(numbersList); // [100,3,4,5,6,7];

// // numbersList.splice(6,0,2,4);
// // console.log(numbersList); //[1,3,4,5,6,7,2,4];


// // //kiem tra su ton tai cua phan tu

// // //kiem tra voi moi phan tu trong mang 
// // const every = numbersList.every(x => (x %2 == 0));
// // console.log(every); // false

// // //kiem tra chi can 1 phan tu thoa man dieu kien
// // const some = numbersList.some(x => (x %2 == 0));
// // console.log(some); // true

// // // indexOf(searchElement) Tìm vị trí đầu tiên của phần tử searchElement
// // //  lastIndexOf(searchElement) Tìm vị trí cuối cùng của phần tử searchElement
// // //  includes(searchElement) Kiểm tra có chứa phần tử searchElement không
// // [1, 1, 1].indexOf(1); // 0
// // [1, 1, 1].lastIndexOf(1); // 2
// // ['easy', 'frontend', 'easy'].indexOf('easy'); // 0
// // ['easy', 'frontend', 'easy'].lastIndexOf('easy'); // 2
// // ['easy', 'frontend', 'easy'].includes('easy'); // true
// // ['frontend'].includes('easy'); // false
 
// // const timKiem = arrayLst2.find(x => (x % 3 == 0));
// // const timKiemIndex = arrayLst2.findIndex(x => (x % 3 == 0));
// // console.log("arrList2", arrayLst2);
// // console.log(timKiem);//6
// // console.log(timKiemIndex); //2 chi so 
// // -----------------------------------------------------------------------------------------
// //HAM MAP()_TU DINH NGHIA

// // Định nghĩa hàm tùy biến "map" với hai tham số
// function map(arr, mappingFn) {
//   // Kiểm tra nếu đối số "arr" không phải là mảng hoặc "mappingFn" không phải là hàm, 
//   // thì trả về undefined vì đầu vào không hợp lệ.
//   if (!Array.isArray(arr) || typeof mappingFn != 'function') return undefined;
  
//   // Tạo một mảng mới để lưu trữ các giá trị sau khi áp dụng "mappingFn" lên từng phần tử của "arr".
//   const newArray = [];

//   // Duyệt qua từng phần tử của mảng "arr"
//   for (let i = 0; i < arr.length; i++) {
//     // Lấy ra phần tử hiện tại
//     const element = arr[i];
    
//     // Gọi hàm "mappingFn" với phần tử hiện tại và chỉ số của nó,
//     // sau đó lưu kết quả vào "newArray"
//     const newElement = mappingFn(element, i);
//     newArray.push(newElement);
//   }
  
//   // Trả về mảng "newArray" chứa các giá trị đã được biến đổi.
//   return newArray;
// }

// // Gọi hàm "map" với mảng [1, 2, 3] và hàm callback (arrow function) tăng mỗi phần tử lên 1 đơn vị.
// // Kết quả là mảng mới [2, 3, 4].
// // console.log(map([1, 2, 3], (x) => x + 1));


// function coursHandler(arrlist4){
//   // console.log(arrlist4);
//   // return arrlist4;
// }
// // var newCours = arrlist4.map(coursHandler);
// // console.log(newCours);

// //HAM REDUCE()

// const test = [2,3,4].reduce((sum,number ) => sum + number, 0);

// // console.log("kq = " + test); // 9
// //------------------CAC PHUOGN THUC TRONG MANG--------------------------------------
// // reverse() : dao nguoc gia tri trong mang
// // join() : bien doi cac phan tu trong mang thanh chuoi
// // includes() : kiem tra mang co cuoi phan tu nao khong
// // indexOf() :  tra ve vi tri cua phan tu dau tien tim thay
// // lastIndexOf() :  tra ve vi tri cua phan tu cuoi cung tim thay
// // push() : them phan tu vao cuoi mang
// // unshift() : them phan tu vao dau mang
// // pop() : xoa phan tu cuoi cungg trong mang
// //------------------------------------------------
// // slice() : tao ra mang moi giong mang ban dau
// const arr = arrList4.slice();
// // slice(start) : start => vi tri index o trong mang
// const arr2 = arrList4.slice(2);
// // slice(start,end) : start => vi tri bat dau, end la vi tri ket thuc
// //sao chep tu vi tri bat dau den vi tri (end - 1)  
// const arr3 = arrList4.slice(2,5);

// //---------------------------------
// //splice() : xoa phan tu trong mang hoat thay the phan tu
// const pets = ["dog", "cat","bird", "lion"];
// // const pets1 = pets.splice(3);
// // splice(start, deleteCount, item1,item2..itemN) :  deleteCount-> so luong phan tu muon xoa hoac item thay the 
// const pets2 = pets.splice(1,3); //(3) ['dog', 'cat', 'bird']
// const pets3 = pets.splice(1,3,"van phu tin"); //(2) ['dog', 'van phu tin']

// //---------------------------------------------
// //sort(): sap xep ca phan tu trong mang theo chuan unicode-16
// const random = [1, 2, 1000, "VanPhuTin", 100, 5, 12];
// random.sort(); //(7) [1, 100, 1000, 12, 2, 5, 'VanPhuTin']
// // sort(callBack -- Fn)
// const random2 = random.sort((a,b) => (a > b ? 1 : -1));
// // console.log(random2); // (7) [1, 2, 5, 12, 100, 1000, 'VanPhuTin']


// //----------------------------------------
// find() : tim phan tu dau tien trong mang thoa dieu kien
// const arrNumber = [1,2,3,5,12,12,0,44,323];
// const yourFindNumber = arrNumber.find((element) => (element > 10 )); 
// console.log(yourFindNumber); // 12

//findIndex() : tra ve vi tri index dau tien trong mang 
// const yourFindIndex = arrNumber.findIndex((element) => (element > 10 )); //4


//-------------------------------------------------
//map(): duyet qua tung phan tu trong mang, tra ve mang moi khong lam thay doi gia tri ban dau
// const arrNumber = [1,2,3,5,12,12,0,44];
// const newArr1 = [];
// const arrNumberDouble = arrNumber.map((value,index) =>{
//     if(value > 2){
//         newArr1.push(value);
//         arrNumber.splice('undefined', '')
//        return value;
//     }
// })
// console.log(arrNumberDouble); //[2,  4, 6, 10, 24, 24, 0, 88]   

//-------------------------------
//forEach() : duyet cac phan tu trong mang va KHONG in ra mang moi, khong co RETURN .

// const testForEch = arrNumber.forEach((value,index) =>{
//     value += 2;
//     // console.log(value);
// })
// console.log(testForEch);

//----------------------------------
//filter() : sang loc cac phan tu thoa dieu kien nao do
// const arrNumber = [1,2,3,5,12,12,0,44];
// const lonHonBa = arrNumber.filter((value) => {
//     return value > 4
// });
// console.log(lonHonBa);


//-------------------- SOME and EVERY---------
//tra ve gia tri true or false
//---------SOME----------
//tra ve true khi co 1 dieu khien dung
//---------every----------
//tra ve true khi tat ca thoa dieu kien dung va nguoc lai


//-------------REDUCE---------
//gom cac phan tu trong mang ve 1 gia tri
//tinh tong 
//.reduce((a,b) => {},intialize value);
// const totalNumber = arrNumber.reduce(function(a,b){
    //     return a + b
    // },0)
    // console.log(totalNumber);
const arrNumber = [1,2,3,5,12,12,0,44];

const xoa = arrNumber.pop();
console.log(arrNumber);


//-----------By Value vs By referrences---------
// By value -> gia tri luu trong 1 bo nho

// By referrences -> noi toi vung bo nho, khong biet vung bo nho nao ca
// JSON : javascripy Object Notation
/*
{
    "key" : value,
    "key" : value,
    "key" : value,
    "key" : value,
}
*/
// JSON.stringify(value) -> convert gia tri duoi dang JSON string
// JSON.parse -> lay du lieu tu JSON 

//-------------COPPY ARRAY-----------
//[...array]
const coppy = [...arrNumber];
// console.log(coppy);

//--------- GOP MANG-----------
// dung concat(); -> array1.concat(array2,array3,arrayN);
// dung toan tu ... (ba cham) -> [...array1, ...array2, ...arrayN];

//--------------for of-----------
//for(value of  array)

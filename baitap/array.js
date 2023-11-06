const myArray = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
];

//1. Lấy độ dài (số phần tử) của mảng `myArray`.
function getLength(myArray){
        return myArray.length;
} 
// console.log(getLength(myArray));

//2. Truy cập thông tin của phần tử đầu tiên trong mảng.
function getInfo(myArray){
    return myArray[0]
}
// console.log(getInfo(myArray));

//3. Truy cập tuổi của phần tử thứ hai trong mảng.
function ageTwo(myArray){
    return myArray[1].age;
}
// console.log(ageTwo(myArray));

// 4. Thay đổi tuổi của phần tử thứ ba trong mảng thành 40.
function bai4(myArray){
    return myArray[2].age = 40;
}
bai4(myArray);
// console.log(bai4(myArray));
// console.log(myArray);

// 5. Thêm một đối tượng mới vào mảng với tên là "Eve" và tuổi là 28.
function bai5(myArray){
    const name = 'Eve';
    const age = 28;
    const newObj = {name , age}
    myArray.push(newObj);
}
bai5(myArray);
// console.log(myArray);

// 6. Xóa phần tử thứ hai khỏi mảng.
function bai6(myArray){
    return myArray.splice(1,2)
}
    // bai6(myArray);
    // console.log(myArray);

// 7. Lấy danh sách tất cả các tên trong mảng thành một mảng riêng biệt.

function bai7(myArray){
    const newArr = myArray.map(element => element.name)   
        console.log(newArr);
    };
// bai7(myArray);


// 8. Kiểm tra xem tên "Alice" có tồn tại trong mảng không.
function bai8(myArray){
    let isName = false;
    const checkName = myArray.forEach(element => {
        if(element.name === 'Alice'){
            isName = true;
        }
    });
    if(isName){
        console.log('Alice co trong mang');
    }else {
        console.log('Alice khong co trong mang');
    }
    
}
// bai8(myArray);

// 9. Tìm phần tử có tuổi lớn nhất trong mảng.  { name: 'Bob', age: 40 }

function bai9(myArrayarr){
    if(!myArray && myArray.length === 0) return null;
    let maxAge = myArray[0];
    for(let i = 0 ; i< myArray.length ; i++){
        if(myArray[i].age > maxAge.age){
            maxAge = myArray[i];
        } 
    }
    return maxAge;
}

// console.log(bai9(myArray));

//10. Sắp xếp mảng theo tuổi từ lớn đến nhỏ.
function bai10(myArray){
    if(!myArray) return null;
    myArray.sort((a, b ) =>{ return b.age - a.age })
}
bai10(myArray);
console.log( myArray);
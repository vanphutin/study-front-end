const nestedData = [
    {
      name: "John",
      age: 30,
      hobbies: ["Reading", "Cooking"],
      address: {
        street: "123 Main St",
        city: "Cityville",
      },
    },
    {
      name: "Alice",
      age: 25,
      hobbies: ["Painting", "Traveling"],
      address: {
        street: "456 Elm St",
        city: "Townsville",
      },
    },
    {
      name: "Bob",
      age: 35,
      hobbies: ["Hiking", "Photography"],
      address: {
        street: "789 Oak St",
        city: "Villagetown",
      },
    },
  ];

//1. Truy cập tên của người thứ hai trong mảng `nestedData`.
function exam1(nestedData){
    return nestedData[1].name;
}
// const exam = exam1(nestedData);
// console.log(`tên của người thứ hai trong mảng : ${exam}`);

//2. Truy cập địa chỉ (street) của người thứ ba trong mảng `nestedData`.
function exam2(nestedData){
    return nestedData[2].address.street;
}
const exam = exam2(nestedData);
// console.log(`địa chỉ (street) của người thứ ba : ${exam} `);

//3. Truy cập sở thích (hobbies) của người đầu tiên trong mảng `nestedData`.
function bai3(nestedData){
  return nestedData[2].hobbies;
}
// console.log(bai3(nestedData));

//4. Thay đổi tên của người thứ ba trong mảng `nestedData` thành "Charlie".
function bai4(nestedData){
  return nestedData[2].name = "Charlie";
}

// bai4(nestedData);
// console.log(nestedData);

//5. Thêm một sở thích mới "Swimming" vào danh sách sở thích của người thứ hai trong mảng `nestedData`.
function bai5(nestedData){
  // const addHobbies = "Swimming";
  return nestedData[1].hobbies.push("Swimming");
}
// bai5(nestedData);
// console.log(nestedData);

//6. Truy cập thành phố (city) của địa chỉ của người thứ ba trong mảng `nestedData`.
function bai6(nestedData){
  return nestedData[2].address.city;
}
// console.log(bai6(nestedData));

//7. Thay đổi địa chỉ (street) của người thứ hai trong mảng `nestedData` thành "987 Maple St".
function bai7(nestedData){
  return nestedData[1].address.street= "987 Maple St";
}
// bai7(nestedData);
// console.log(nestedData);

//8. Lấy danh sách tất cả các sở thích của tất cả các người trong mảng `nestedData` thành một mảng riêng biệt.
function bai8(nestedData){
  const newArr=[];
  nestedData.forEach(element => {
    element.hobbies.forEach(hobbi =>{
      newArr.push(hobbi);
    })
  });
  return newArr;
}
// console.log(bai8(nestedData));

//9. Thêm một người mới vào mảng `nestedData` với tên là "Eve", tuổi là 28, không có sở thích và địa chỉ gồm street là "321 Pine St" và city là "Forestville".
function bai9(nestedData){
  const newPerson = {
    name : "Eve",
     age : 28,
     hobbies : [],
     address : {street: "321 Pine St", city:"Forestville"},
  };
  nestedData.push(newPerson);

}
// bai9(nestedData);
// console.log(nestedData);

//bai10. Sử dụng phương thức `shift()` để loại bỏ phần tử đầu tiên khỏi mảng.
function bai10(nestedData){
  return nestedData.shift();
}
// bai10(nestedData);
// console.log(nestedData);

//bai11. Sử dụng phương thức `unshift()` để thêm một phần tử vào đầu mảng.
function bai11(nestedData){
  const addMolecule = {
    name: "John",
    age: 30,
    hobbies: ["Reading", "Cooking"],
    address: {
      street: "123 Main St",
      city: "Cityville",
   }
  }
  return nestedData.unshift(addMolecule);

}
// bai11(nestedData);
// console.log(nestedData);

//bai12. Sử dụng phương thức `slice()` để tạo một bản sao của mảng ban đầu.
function bai12(nestedData){
  const createCopy = nestedData.slice();
  return createCopy;
}
// console.log("copy: " , bai12(nestedData));

//bai13. Sử dụng phương thức `splice()` để loại bỏ và thêm phần tử vào mảng.

function bai13(nestedData){
  const removerAndAdd = 
    {
      name: "van phu tin",
      school: "duy tan univercity",
      class: "TPM19",
      majors: "information teachnology",
    }
  return nestedData.splice(1,3,removerAndAdd);
}
// bai13(nestedData);
// console.log(nestedData);


/*add in course: "javascript " for each object  
function addInfo(nestedData){
  const updatedData = nestedData.map(e =>({
    ...e,
    course: "javaScript"
  }))
  console.log(updatedData);
}
addInfo(nestedData);
console.log(nestedData);*/

const Student = [
  {
    ID: 28211106758,
    nameStudent: "Van Phu Tin",
    homeTown: "Tien Lap",
    school: "duy tan university",
  }
]

//14. Sử dụng phương thức `concat()` để nối hai mảng lại với nhau.
function bai14(){
  const concatenateTwoArr = nestedData.concat(Student);
  console.log(concatenateTwoArr);
}
// bai14();

//// 15. Sử dụng phương thức `indexOf()` để tìm vị trí của một phần tử trong mảng.
function bai15(nestedData, targetName) {
  for (let i = 0; i < nestedData.length; i++) {
      if (nestedData[i].name === targetName) {
          return i; // Return the index when the name matches
      }
  }
  return -1; // Return -1 if the name is not found
}

// const johnIndex = bai15(nestedData, "Alice");
// console.log(johnIndex);

//16. Sử dụng phương thức `map()` để tạo một mảng mới dựa trên mảng ban đầu.
function bai16(nestedData){
  const newArr = nestedData.map(e =>({
    ...e,
  }))
  console.log(newArr);
}
bai16(nestedData);


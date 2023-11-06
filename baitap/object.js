const myObject = {
    students: [
      { name: "Sarah", grade: 85 },
      { name: "Tom", grade: 92 },
      { name: "Emily", grade: 78 },
    ],
  };
//11. Lấy độ dài (số phần tử) của mảng `students` trong đối tượng `myObject`.
function bai11(myObject){
    return myObject.students.length;
}
// console.log(bai11(myObject));

//12. Truy cập thông tin của sinh viên đầu tiên trong mảng `students`.
function bai12(myObject){
   return myObject.students[0];
}
// console.log(bai12(myObject));

//13. Truy cập điểm của sinh viên thứ hai trong mảng `students`.
function bai13(myObject){
    return myObject.students[1].grade;
}
// console.log(bai13(myObject));

//14. Thay đổi điểm của sinh viên thứ ba trong mảng `students` thành 88.
function bai14(myObject){
    return myObject.students[2].grade = 88;
}

// bai14(myObject);
// console.log(myObject);

//15. Thêm một đối tượng sinh viên mới vào mảng `students` với tên là "Peter" và điểm là 95.
function bai15(myObject){
    const name = 'Peter';
    const grade = 95;
    const add = {name, grade};
    return myObject.students.push(add);
}
bai15(myObject);
// console.log(myObject);

//16. Xóa sinh viên đầu tiên khỏi mảng `students`.
function bai16(myObject){
    return myObject.students.splice(0,1);
}
// bai16(myObject);
// console.log(myObject);

//17. Lấy danh sách tất cả các tên sinh viên trong mảng `students` thành một mảng riêng biệt.
function bai17(myObject){
    const newArr = myObject.students.map(e => e.name);
    console.log(newArr);
}
// bai17(myObject);

//18. Tính điểm trung bình của tất cả các sinh viên trong mảng `students`.
function bai18(myObject){
    // let sum = 0;
    // count = myObject.students.length;
    // for(let i = 0; i < count ; i++){
    //    sum += myObject.students[i].grade;
    // }
    // const AGV = sum / count ;
    // return AGV;

        const grades = myObject.students.map(student => student.grade);
        const total = grades.reduce((sum, grade) => sum + grade,0);
        const Avg = total / grades.length;
        return Avg;
    
}
// console.log(`điểm trung bình của tất cả các sinh viên : ${bai18(myObject)} `);

//19. Tìm sinh viên có điểm cao nhất trong mảng `students`.
function bai19(myObject){
    let maxGrades = 0;
    let topGrades = [];
    myObject.students.map(student =>{
        if(student.grade > maxGrades)  {
            maxGrades = student.grade;
            topGrades = [student];
        };
    })
    return topGrades;
}
// console.log(bai19(myObject));

//20. Sắp xếp mảng `students` theo điểm từ cao đến thấp.

function bai20(myObject){
    myObject.students.sort((a,b) => (a.grade > b.grade ? 1 : -1));
}
bai20(myObject);
console.log(myObject.students);
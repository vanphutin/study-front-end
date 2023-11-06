const student = {
    name :"tin",
    'last-name' : 'van phu',
    age : 19,
    male : true,
    school : 'duy tan university',
    hi : function(){
        console.log('HELLO');
    },
    course :{
        "nameCourse-1" : 'javaScript',
        "nameCourse-2" : 'java',
        "nameCourse-3" : 'PHP',
        "nameCourse-4" : 'Python',
    }
}
// ------------------ TRUY XUAT GIA TRI OBJECT--------------
// console.log(student['last-name']);

//----------thay doi gia tri----------
// student.age = 20;
student.isDeveloper = true;
// of student['is-Developer'] = false;

//-------xoa gia tri trong object-------
// dung : delete
// delete student["last-name"];

student.hello = function(){
    console.log("i am developer");
}
// console.log(student);

//---------FOR IN trong object------------
for(let key in student){
    // console.log(key);
    // console.log(student[key]);
    if(key === 'name' ){
        // delete student.name;
        student.status = 'on';
        student.pice = 100;
    }
    if(key === 'name'){
        student.pice  = 200; // cap nhat pice len 200
    }
    // console.log(`${key} : ${student[key]}`);
}
// console.log(student);

//---------method object.keys(object)----------
//tra ve 1 mang chua tat ca cac keys cua object
// console.log(Object.keys(student));
// console.log(Object.keys(student).length); //10


//----------------object.values------------
// tra ve mot mang chua tat ca gia tri cua object
// console.log(Object.values(student));
// console.log(Object.values(student).length);


//------------ object.entries(object)---------
// tra ve mot mang nested [trong mang co them nhieu mang khac nhau] gom co keys va values
// console.log(Object.entries(student));
// console.log(Object.entries(student).length);

//-------------object.assign(object)-----------
//sao chep values tu object nay object khac
const obj1 = {
    name : 'tung',
};
const obj2 = {
    lastName: 'son',
    name : 'lan',
};
const newObj = Object.assign(obj1,obj2);
const newObj1 = {...obj1,...obj2}
// console.log(newObj);
// console.log(newObj1);

//---------object.freeze(object)--------
//ngan chan chinh sua keys va values cua object
const car= {
    brand : 'BMW',
} 
const newCar = Object.freeze(car);
// newCar.brand ='AUDI';
// console.log(newCar);
// car.pice = 100
// console.log(car);


//----------objcet.seal(object)----------
//cho phep chinh sua keys values nhung khong duoc them keys values moi


//-------------COPPY OBJECT-----------
// Object.assign(Object)
//[...object]
// const coppy = [...objNumber];
// console.log(coppy);
//-------------COPPY OBJECT phuc tap-----------
const newStudent = JSON.parse(JSON.stringify(student));
// newStuden.course.totalPice = '$100'
// console.log(newStudent);
// console.log(student);

//--------------- tu khoa THIS ---------------
// this mo se de cap den object gan nhat

const student2 = {
    name :"tin",
    'last-name' : 'van phu',
    age : 19,
    male : true,
    school : 'duy tan university',
    hi : function (){
        return `HELLO, i am ${this.name} and i am ${this.age} year old`;
    },
    fullName :{
        name: 'Van Phu Tin',
    }
}
// console.log(student2.hi());
// console.log(student2);

//---------------optional chaining----------
if(student2.fullName){
    if(student2.fullName.name){
        // console.log(student2.fullName.name);
    }
} 
// OR uses : optional chaining (?)
student2.fullName?.name
// console.log(student2.fullName?.name);

// ---------------destructuring object -----------
// const name = student.name
// const age = student.age
 // OR USES destructuring object 
//  const {name, age} = student
 const {name, age, ...rest} = student
//  console.log(rest);


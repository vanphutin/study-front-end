// bài 3:
// cho array persons 
// [{
// 	name: ‘Trung',
// 	class: ‘Nodemy01',
// 	dateJoin: ‘05-02-2020',
// age: 20
// }, {
// 	name: ‘Phong',
// class: ‘Nodemy01',
// dateJoin: ‘06-01-2020',
// age: 19
// }, {
// 	name: ‘Nam',
// class: ‘Nodemy02'
// dateJoin: ‘25-01-2020',
// age: 20
// }]

// 3.2 dùng .filter để tìm ra những học viện tham gia trước tháng 2
// 	gợi ý : dùng toUppercase để viết hoa

const array = [
    {
      name: 'Trung',
      class: 'Nodemy01',
      dateJoin: '05-02-2020',
      age: 20
    },
    {
      name: 'Phong',
      class: 'Nodemy01',
      dateJoin: '06-01-2020',
      age: 19
    },
    {
      name: 'Huy',
      class: 'Nodemy02',
      dateJoin: '16-01-2015',
      age: 15
    },
    {
      name: 'Nam',
      class: 'Nodemy03',
      dateJoin: '25-01-2020',
      age: 20
    }
  ];


// 3.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
//   function ageTang(array) {
//     array.sort((a, b) => a.age - b.age);
//     return array;
//   }
  
//   const sortedArray = ageTang(array);
//   console.log(sortedArray);

// 3.3 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
function sortByDateJoin(array) {
    array.sort((a, b) => {
      const dateA = new Date(a.dateJoin);
      const dateB = new Date(b.dateJoin);
      return dateA - dateB;
    });
    return array;
}
  
  const sortedArray = sortByDateJoin(array);
  console.log(sortedArray);
  
// 3.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
const newArr = [];
// function inHoa(array) {
//     const newArr = array.map((value) => {
//       if (value.name) {
//         return { ...value, name: value.name.toUpperCase() };
//       }
//       return value;
//     });
  
//     return newArr;
//   }
// const testt = inHoa(array);
// console.log(testt);

// dung map duyet qua tuoi va tang tuoi do len 1

function tangTuoi(array){
    const newArr = array.map((value) => {
        if(value.age){
            return {...value, age: (value.age + 1)}
        }
        return value;
    })
    return newArr;
}
const tesst = tangTuoi(array);
console.log(tesst);
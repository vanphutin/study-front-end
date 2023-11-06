// 1. REGULAR EXPRESSIONS: Biểu thức chính quy là các mẫu được sử dụng để khớp với các tổ hợp ký tự trong chuỗi. Trong JavaScript, biểu thức chính quy cũng là đối tượng. Các mẫu này được sử dụng với exec()và test()các phương thức của RegExp, và với match(), matchAll(), replace(), replaceAll(), search()và split()các phương thức của String.

const reg1 = /hello/;
    //or
const reg2 = RegExp("hello");
console.log(reg1.test("hello")); // return value true or false  --> true 

// 2. Anchor ^ $
    // ^ string bắt đầu với từ nào đó
    // $ string kết thúc với từ nào đó

    /hi$/.test("welcome to hi"); // true
    /hi$/.test("welcome to hello"); // false

    /^hi/.test("hi welcome to hi"); // true
    /^hi/.test("welcome to hi"); // false

// 3. ranges []
    //^: phủ định 
    // [a-z]: các kí tự từ a đến z in thường
    // [A-Z]: các kí tự từ A đến Z in HOA
    // [0-9]: các số từ 0-9
    // [a-z0-9A-Z]: các số từ 8-9 hoặc từ a → z hoặc từ AZ
   
    /[a-z]/.test("aadfs"); // true
    /[a-z]/.test("A"); // false.
    /[0-9]/.test("nds7fsdsa8898fn"); // true
    /[^a-z]/.test("a"); // -> fasle
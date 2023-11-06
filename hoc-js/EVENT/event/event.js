// addEventListener : element.addEventListener(event, function, useCapture (object))
    
    const btn = document.querySelector("button");
    const span = document.querySelector("span")

    function eventClick(){
        console.log("click button");
    }
    btn.addEventListener("click",eventClick )
    
// event bubbling  : su kien noi bot
    
    span.addEventListener("click", (e)=>{
        console.log("click span");
    })
    /* result : click span 
    click button */
    
//ngan chan su kien noi bot -> stopPropagation() / stopImmediatePropagation()
    span.addEventListener("click",function (e){
        e.stopImmediatePropagation();
        console.log("click ");
    },{
        capture : true,
    })

    const btn2 = document.querySelector(".btn-secondary");
    const btn3 = document.querySelector(".btn-2");

// element.target : chon chinh xac element ma minh click | element.currentTarget : chon chinh xac phan tu minh click
    btn2.addEventListener("click", (e)=>{
       
        console.log("button 1", e.target);
        //<button type="button" class="btn btn-secondary btn-lg"> <p class="btn-2"> button 2 </p> </button>
    })
    btn3.addEventListener("click", (e)=>{
        e.stopImmediatePropagation();
        console.log("button 2", e.currentTarget);
        // <p class="btn-2"> button 2 </p>
    })
    
// event.preventDefault() : ngan chan hanh vi mat dinh
    const aElement = document.querySelector(".link");
    aElement.addEventListener("click",(e)=>{
        e.stopImmediatePropagation();
        e.preventDefault();
        const name = e.target.dataset.name;
        console.log("dataset :" ,name);
        console.log("click sucess link");
    })

// object style :     event.element.style.{name proprety css} = "value"
    const objectStyle = document.querySelector(".object-style");
    objectStyle.style.color = "black" 

//lay custom attribute -> setdata.name propety
    const customAttribute = document.querySelector(".link");
    customAttribute.addEventListener("click",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log("click  link");
    })

//DOMContentLoaded và load 
    // DOMContentLoaded -> trang web đã được tạo hoàn toàn, đã tải và phân tích cú pháp toàn bộ mã HTML của trang. Sự kiện này không chờ đợi việc tải các tài nguyên bên ngoài như hình ảnh, tệp CSS hoặc JavaScript khác. Nó xảy ra ngay sau khi trang HTML đã được phân tích xong. Được sử dụng để thực hiện các tác vụ JavaScript liên quan đến DOM, như gán sự kiện hoặc thao tác trên các phần tử trang web.

    // load ->  toàn bộ trang web và tất cả các tài nguyên bên ngoài đã được tải hoàn toàn. Điều này bao gồm tất cả hình ảnh, tệp CSS, tệp JavaScript và tất cả các tài liệu phụ khác. Sự kiện này chờ đợi cho đến khi tất cả tài nguyên đã được tải xong trước khi kích hoạt. Được sử dụng khi bạn muốn thực hiện các tác vụ JavaScript hoặc các thao tác chính trên trang sau khi toàn bộ trang đã được tải hoàn toàn, bao gồm cả tài nguyên bên ngoài.

    /* Sử dụng với mục đích:
        : DOMContentLoaded thường được sử dụng để thực hiện các tác vụ JavaScript liên quan đến DOM (Document Object Model) mà không cần chờ đợi toàn bộ trang và tất cả tài nguyên được tải xong. Nó giúp tối ưu hóa hiệu suất và tương tác ngay khi DOM sẵn sàng.
        : load thường được sử dụng khi bạn muốn đảm bảo rằng toàn bộ trang và tất cả các tài nguyên bên ngoài đã sẵn sàng trước khi thực hiện các tác vụ JavaScript quan trọng hoặc thao tác chính trên trang.
    */

// Sự kiện rê chuột : mouse -> event.addEventListener("mouse[...]", funcition); [...] tên mouse !.. xem thêm trong word.

/* pageX và pageY:
    pageX và pageY đại diện cho tọa độ của sự kiện chuột (hoặc vị trí của phần tử trên trang) trong khoảng cách từ lề trên của trang (top) và lề trái của trang (left). Nói cách khác, chúng xác định vị trí tương đối so với toàn bộ trang.
    Sự kiện pageX và pageY thường được sử dụng khi bạn muốn biết vị trí tương đối của sự kiện chuột trên trang.
    clientX và clientY:

    clientX và clientY đại diện cho tọa độ của sự kiện chuột (hoặc vị trí của phần tử trên trang) trong khung nhìn (viewport) của trình duyệt. Nói cách khác, chúng xác định vị trí tương đối so với cửa sổ trình duyệt.
    Sự kiện clientX và clientY thường được sử dụng khi bạn muốn biết vị trí tương đối của sự kiện chuột trong khung nhìn của trình duyệt.
*/

// Element.getBoundingClientRect() -> trả về một DOMRect đối tượng cung cấp thông tin về kích thước của một phần tử và vị trí của nó so với khung nhìn .
    const Coordinates = document.querySelector(".location")
    function getCoordinates(e){

        const { left, top, width, height} = e.target.getBoundingClientRect();
        console.log({ left, top, width, height});
        Object.assign(boxElement.style,{
            width: "200px",
            height: "50px",

        })
    }

    
//------------------------------------  SU KIEN DANH CHO INPUT  -----------------------------------------

const InputEvent = document.querySelector("#input");

// sự kiẹne keydown : khi người dùng gõ bàn phím 
    InputEvent.addEventListener("keydown", (e)=>{
        console.log(e.key);
        // e.key : key nguoi dung nhap vao
    })

// su kien keyup : khi nhan phim roi tha

    InputEvent.addEventListener("keyup", keyup);
    function keyup(e){
        console.log(e.key);
    }

// change : xay ra khi go xong_enter, nguoi dung de chuot ra ngoai 
    InputEvent.addEventListener("change", change);
    function change(e){
        console.log("in ra txt ");
    }

// focus : khi nhấn vào ô điền 
    InputEvent.addEventListener("focus", focus);
    function focus(e){
        console.log("đã focus vào ô !!");
    }

// blur : khi nhấn vào focus xong nhấn ra ngoài 
    InputEvent.addEventListener("blur",function(e){
        console.log("đã blur ra ngoài")
    })

//--------------------------------------- FORM SUBMIR ---------------------------------------
const submit = document.querySelector(".form");
const formInput = document.querySelector("#form-input");
// submit : sự kiện giúp bạn kiểm soát được hành động submit form của người dùng khi họ click vào button submit.
submit.addEventListener("submit", function(e){
        e.preventDefault();
        console.log(this.elements["name"]);
        // console.log(this.elements["name"].value);
        // console.log(e.target);
        const username = this.elements["name"].value;
        const hobby = this.querySelectorAll(`input[name="hobby"]`)
        let hobbyValue = [];
        [...hobby].forEach((item) => hobbyValue.push(item.value));

        const gender = this.elements["gender"].value;
        console.log({username, hobbyValue, gender});
    })


//--------------------------------------------- EVENT SCROLL ---------------------------------------------

// Document.documentElement : trả về Elementphần tử gốc của document(ví dụ: phần <html>tử cho tài liệu HTML).


//Sự kiện scroll : khi người dùng cuộn chuột (di chuyển con lăn chuột). Sự kiện này xảy ra liên tục trong quá trình cuộn chuột. Và sự kiện này phát sinh trên các window Object trong JavaScript.
    window.addEventListener("scroll", () =>{
        // console.log("scroll");
    })

// Debounce : là một khái niệm chỉ sự giới hạn việc thực thi một đoạn code liên tục với tần suất nhanh.
    function debounce(func, delay, immediate) {
        let timeoutId;
    
        return function() {
        const context = this;
        const args = arguments;
    
        const executeLater = () => {
            timeoutId = null;
            if (!immediate) {
            func.apply(context, args);
            }
        };
    
        const callNow = immediate && !timeoutId;
    
        clearTimeout(timeoutId);
        timeoutId = setTimeout(executeLater, delay);
    
        if (callNow) {
            func.apply(context, args);
        }
        };
    }
  

    window.addEventListener("scroll",  debounce(() =>{
        console.log("scroll");
    },100)) // 10 -> 50 mili sencec
  
// pageXOffset : là bí danh của [ scrollX ] , nó trả về số pixel mà tài liệu hiện đang được cuộn dọc theo trục hoành(chiều ngang) (nghĩa là cuộn trái  hoặc cuộn phải ) với giá trị (0,0), cho biết cạnh trái phải của tài liệu hiện được căn chỉnh với cạnh trái phải  của nội dung cửa Document của khu vực.
    pageXOffset = scrollX;

// pageYOffset : là bí danh của [ scrollY ] , nó trả về số pixel mà tài liệu hiện đang được cuộn dọc theo trục tung(chiều dọc) (nghĩa là lên hoặc xuống) với giá trị (0,0), cho biết cạnh trên của tài liệu hiện được căn chỉnh với cạnh trên của nội dung cửa Document của khu vực.
    pageYOffset = scrollY;

// Element.scrollTop,Element.scrollLeft,Element.scrollWidth,Element.scrollTo,Element.scrollHeight :> [chỉ áp dụng cho element !]
    const scroll = document.querySelector(".scroll");
    scroll.addEventListener("scroll", handleScroll);
    function handleScroll(e){
        // console.log("scrollTop",scroll.scrollTop);
        // console.log("scrollLeft",scroll.scrollLeft);
        // console.log("scrollWidth",scroll.scrollWidth);
        // console.log("scrollTop",scroll.scrollHeight);
    }

// scrollIntoView() : sử dụng để cuộn một phần tử sao cho nó nằm trong phạm vi hiển thị của cửa sổ trình duyệt hoặc của phần tử chứa nó.
    scroll.addEventListener("scroll", handleScroll);
    function handleScroll(e){
        if(window.scroll > 10){
            btn.scrollIntoView();
            console.log("ok");
        }
    }
   
    
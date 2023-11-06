//--------------------------DOM-----------------------
  // KHI CONSOLE.LOG ket qua tra ve [...] -> co the truy van 
//METHOD 
  // + attribute : thuoc tinh: href, class, stype, scr, id
  // domNode : html, body, h1 h2 ,...
  // selector : truy van node trong html 
  //querySelectorAll : tra ve 1 nodeList chua danh sach cac node(khong phai mang), neu khong co tra ve empty , co the dung loop -> chi su dung for/forEach


// 0.
  const aElement = document.querySelector("a");
  const h1Element = document.querySelector("h1");
  const strongElement = document.querySelector("strong");
  const h2Element = document.querySelector("h2");
  const h3Element = document.querySelector("h3");
  const boxItem = document.querySelector(".box")

// 1. getAttribute : lay gia tri thuoc tinh
  console.log(aElement.getAttribute("href"));
  console.log(h1Element.getAttribute("class"));

// 2. setAttribute : dat gia tri cho thuoc tinh, them vao 
  h1Element.setAttribute("style" , "color: blue");

// 3. removeAttribute: xoa thuoc tinh 
  h1Element.removeAttribute("color: red")
  //OR h1Element.removeAttribute("style")  // XOA TAT CA THUOC TINH STYLE 

// 4. hasAttribute : kiem tra co thuoc tinh nao khong, tra ve dang booblean
  console.log(h1Element.hasAttribute("class"));
// true
  console.log(h1Element.hasAttribute("id"));
// false

//5 . textContent: tra ve toan bo noi dung text trong element selector bao gom cac the (h1,h2...), co the thay doi noi dung text 
  console.log(h1Element.textContent);
  // hello
  
  h1Element.textContent = "noi dung thay doi khi set thuoc tinh: textContent"  
  console.log(h1Element.textContent);

//6.innerText : giong textContent nhung khong the lay thuoc tinh <display: none> , LOAI BO KHOANG TRONG VA XUONG DONG !

  console.log(h2Element.innerText);
  // HI !

// innerHTML : lay toan bo noi dung, bao gom (thuoc tinh, selector) hay goi la domNode, khi thay doi noi dung phai co dau <``>
  console.log(h2Element.innerHTML);
  //        <strong style="display: none;">word</strong>
  h3Element.innerHTML = 
    `<h3> leaning javaScript 
    <p>and Python</p>
    </h3> `;

// 7. thuộc tính classList: tập hợp trực tiếp các class thuộc tính của phần tử (.add , remove, contains, toggle),chi truyen duoc 1 class

    h3Element.classList.add("is-active");
  // 7.2 classList.remover: xoa class trong element
    h3Element.classList.remove("is-active");
  // 7.3 classList.contains: kiem tra class co trong element khong -> tra ve kieu booblean (true/false)
    const contains = h3Element.classList.contains("is-activer");
    console.log(contains); //false
  // 7.3 classList.toggle: kiem tra class trong element, neu co class thi xoa nguoc lai them class vao
    h3Element.classList.toggle("is-active") 

// 8. className : tra ve chuoi cac class cua selsector
  console.log(h3Element.className);

//----------------- CRUD -------------------
/* CRUD stands for -
  C: Create
  R: Read
  U: Update
  D: Delete 
 */

// 1. Tao ra Elenemt trong javaScript : document.createElement("tag")
  
  // const bodyElement = document.querySelector("body")
  
  //1.1 tao : createElement -> tao phan tu HTML duoc chi dinh boi tagName 
  const newDiv = document.createElement("div");
  //1.2 in : element.appendChild -> them mot nut vao cuoi danh sach con cua nut cha duoc chi dinh
  const headerElement = document.querySelector("header");
  //1.2.1 appendChild : thêm một nút vào cuối danh sách con của nút cha được chỉ định.
  headerElement.appendChild(newDiv);
  //1.3 chen class
    //chen 1 class
    newDiv.classList.add("age");
    //chen nhieu class
    // newDiv.className = "age name ";
  //1.4 in text 
  newDiv.setAttribute("date-name", "value")
  newDiv.textContent = "this is computer"
  newDiv.innerHTML = `<p>I'm from VietNam</p>`
  
//2. document.createTextNode(" string ") -> tao ra text node
  const text = document.createTextNode(" hello, i am devoloper ");
  const h1 = document.createElement("h1");
  headerElement.appendChild(h1);
  h1.appendChild(text);


  //-----BAI TAP : ------- create menu-----------------
  const ulElement = document.createElement("ul");
  headerElement.appendChild(ulElement);
  ulElement.setAttribute("class", "menu");

  const liElement = document.createElement("li");
  ulElement.appendChild(liElement);
  liElement.setAttribute("class", "sub-menu");
  ulElement.setAttribute("style", "list-style: none;")
  const aItem = document.createElement("a");
  liElement.appendChild(aElement);
  aElement.innerText = "HOME";

// 3. element.cloneNode(return true or false) -> sao chep element : neu true thi sao chep toan bo element(text,img..), false : chi sao chep node

  const aClone = aItem.cloneNode(1);
  liElement.appendChild(aClone)
  aClone.setAttribute("href", "#");
  aClone.setAttribute("style", "margin-left: 15px ;")
  aClone.textContent = "ABOUT"

//4 . element.hasChildNodes() -> kiem tra co phan tu con hay khong; return true or false 

  console.log(ulElement.hasChildNodes()); // true
  if(ulElement.hasChildNodes){
    const print = ulElement.innerText;
    console.log(print); // in ra thuoc tinh con trong element
  }
  
//5. element.insertAdjacentText("position", "text") && element.insertAdjacentElement("position", "text") && element.insertAdjacentHTML("position", "text") -> it khi duoc su dung !
  // + position: beforebegin/afterbegin/beforeend/afterend
  // + text : chuoi
  document.body.insertAdjacentHTML("afterend", `<ul class= "menu">
                                                  <li>1</li>
                                                  <li>2</li>
                                                  <li>3</li>
                                                </ul>`);
      
//6. parentNode / parentElement / removeChild
  // + parentNode / parentElement -> lay tra phan tu cha cua element (muon lay phan tu cha, ong noi, ... thi ..parentNode.parentNode.... / .parentElement.parentElement...)
  console.log(strongElement.parentNode); // -> h2
  console.log(strongElement.parentNode.parentNode); // -> body
  console.log(strongElement.parentElement.parentElement.parentElement); // -> html 

  // element. parentNode / parentElement .removeChild(element);
  const spanDel = document.querySelector("span");
  console.log(spanDel.parentElement);
  spanDel.parentNode.removeChild(spanDel);
  // di tu phan tu cha, roi di nguoc lai chinh no !

//7. nextElementSibling: chon ra phan tu dung truoc no -- previousElementSibling: chon ra phan tu dung sau no
  console.log(h2Element.previousElementSibling); // -> h1
  console.log(h2Element.nextElementSibling); // -> h3
  console.log(h2Element.nextElementSibling.nextElementSibling); // -> header .....


//8. .childNodes: tra ve tat ca cac tetxNode(bao gom text, khoang cach, xuong dong..) ben trong | .children : tra ve cac node khong bao gom textNode
  console.log(h2Element.childNodes); // ->  NodeList(3) [text : (khoang trong or xuong dong), strong, text]
  console.log(h2Element.children); // ->  HTMLCollection [strong]

//9. element.firstChild/lastChild : chi lay text / firstElementChild/lastElementChild: chi lay element 

  //text, strong, text]
  console.log(h2Element.firstChild); // text : -> HI ! 
  console.log(h2Element.firstElementChild); // -> element : <strong style="display: none;">word</strong>

  console.log(h2Element.lastChild); // #text
  console.log(h2Element.lastElementChild); // <pre> hi </pre>

//10. offsetHeight, offsetWidth, offsetLeft, offsetTop, offsetParent: tra ve vi tri, kich thuoc cua box 
  console.log(boxItem.offsetWidth); // 205
  console.log(boxItem.offsetHeight); //505

//11. window.innerWidth và window.innerHeight: Các thuộc tính này cung cấp thông tin về kích thước của cửa sổ trình duyệt.
  console.log(window.innerHeight); //685
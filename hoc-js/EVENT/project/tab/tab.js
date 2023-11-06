const tabItem = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItem].forEach(item => item.addEventListener("click", handleClick));

function handleClick(e){
    [...tabItem].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
    const tabNumber = parseInt(e.target.dataset.tab);
    // console.log(tabNumber);
    [...tabContents].forEach((item) => {
        item.classList.remove("active");
        if(parseInt(item.getAttribute("data-tab")) === tabNumber){
            item.classList.add("active")
        }
    });
    // [...tabContents][tabNumber-1].classList.add("active")
}
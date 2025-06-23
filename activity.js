let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let addList = document.createElement("li");
  let del = document.createElement("button");
  del.innerText = "Delete";
  del.classList.add("del");
  addList.innerText = inp.value;
  addList.appendChild(del);
  ul.appendChild(addList);
  inp.value = "";
});

let myUl = document.querySelector("ul");

myUl.addEventListener("click", function (event) {
//   console.log(event.target);
  if (event.target.nodeName == "BUTTON") {
    let delBtn = event.target;
    let listItem = delBtn.parentElement;
    listItem.remove();
    console.log("list removed");
  }
});

// let delBtns = document.querySelectorAll(".del");
// for(let delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// };

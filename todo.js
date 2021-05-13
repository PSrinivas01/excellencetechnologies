let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let e1 = document.getElementsByTagName("11");

btn.addEventListener("click", () => {
  let txt = input.value;
  if (txt === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerhtml = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagname == "LI") {
    e.target.classlist.toggle("checked");
  }
});

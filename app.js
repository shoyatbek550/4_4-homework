let list = document.querySelector(".list");
let appear = document.querySelectorAll(".appear");
let none = document.querySelectorAll(".none_visible");
let wrapper = document.querySelectorAll(".plus");
let img = document.createElement("img");
let btnaa = document.querySelector(".q");
img.setAttribute("src", "./../img/x.png");

list.addEventListener("click", (e) => {
  let target = e.target;

  if (
    target.tagName == "DIV" &&
    target.dataset.id == target.dataset.elementId
  ) {
    for (let i = 0; i < appear.length; i++) {
      appear[i].classList.remove("none_visible");
    }

    for (let i = 0; i < none.length; i++) {
      none[i].classList.add("none_visible");
    }

    appear[target.dataset.id - 1].classList.add("none_visible");
    none[target.dataset.id - 1].classList.remove("none_visible");

    img.setAttribute("class", "imgx");
    wrapper[target.dataset.id - 1].appendChild(img);
  }
});

let progBar = document.querySelectorAll(".prog");
let zekr = Array.from(document.querySelector("section .zekr"));
let btns = Array.from(document.querySelectorAll("header nav button[type=btn]"));
let morBtn = document.querySelector(".morning");
let evenBtn = document.querySelector(".evenig");
let content = Array.from(document.querySelector("#content").children);
let font = document.querySelector("select#fonts");
let fonts = ["Scheherazade New", "Amiri", "Aref Ruqaa", "Cairo"];
let size = document.querySelector("select#size");

fonts.forEach((ele => {
  let option = document.createElement("option");
  option.value = ele;
  option.append(ele);
  font.append(option);
}));

font.onchange = function () {
  document.querySelector("body").style.fontFamily = this.value;
  localStorage.setItem("Font Family", this.value);
}

if (window.localStorage.getItem("Font Family")) {
  document.querySelector("body").style.fontFamily= localStorage.getItem("Font Family");
  font.value = localStorage.getItem("Font Family")
}
for (let i = 10; i <= 30; i++) {
  let sizeNum = i;
  let option = document.createElement("option");
  option.value = i;
  option.append(`${sizeNum}px`);
  size.append(option)
}

size.onchange = function () {
  content.forEach((ele => {
    ele.style.fontSize = `${this.value}px`;
  }))
  localStorage.setItem("Font Size", this.value);
}


if (window.localStorage.getItem("Font Size")) {
  content.forEach((ele => {
    ele.style.fontSize = `${localStorage.getItem("Font Size")}px`;
  }))
  size.value = localStorage.getItem("Font Size");
};


morBtn.addEventListener("click", (e => {
  evenBtn.classList.remove("active")
  morBtn.classList.add("active")
  contentView(morBtn)
}))

evenBtn.addEventListener("click", (e => {
  morBtn.classList.remove("active");
  evenBtn.classList.add("active");
  contentView(evenBtn);
}))

progBar.forEach((ele => {
  ele.textContent = ele.parentElement.parentElement.getAttribute("repeate");
}));

zekr.forEach(addEventListener("click", (e => {
  progStatus(e.target)
})))

function progStatus(ele) {
  if (ele.classList.contains("zekr")) {
    let prog = ele.lastElementChild.lastElementChild;
    let repeateNum = ele.getAttribute("repeate");
    if (prog.textContent > 0) {
      let progNum = repeateNum - prog.textContent + 1;
      prog.textContent--;
      prog.style.width = `${progNum / repeateNum * 100}%`
    } else {
      prog.textContent = 0;
    }
  } if (ele.parentElement.classList.contains("zekr")) {
    let e = ele.parentElement;
    let prog = e.lastElementChild.lastElementChild;
    let repeateNum = e.getAttribute("repeate");
    if (prog.textContent > 0) {
      let progNum = repeateNum - prog.textContent + 1;
      prog.textContent--;
      prog.style.width = `${progNum / repeateNum * 100}%`
    } else {
      prog.textContent = 0;
    }
  } else {
  }
};

function contentView(cntnt) {
  let lenght = btns.indexOf(cntnt);
  content.forEach((ele => {
    ele.classList.remove("active");
  }))
  content[lenght].classList.add("active")
}
let alertBtn = document.querySelector(".alert");
let boxKey = document.querySelector(".box");
let resultBox = document.querySelector(".result");
let eKey = document.querySelector(".card.key p:last-child");
let eLocation = document.querySelector(".card.location p:last-child");
let eWhich = document.querySelector(".card.which p:last-child");
let eCode = document.querySelector(".card.code p:last-child");

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  alertBtn.classList.add("hide");
  boxKey.classList.remove("hide");
  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  resultBox.innerHTML = e.which;
});

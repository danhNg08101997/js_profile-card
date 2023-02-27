let searchBtn = document.querySelector(".search-box__btn");

searchBtn.addEventListener("click", function () {
  this.parentElement.classList.toggle("search-box--open");
  this.previousElementSibling.focus();
});

let btnModal = document.querySelector(".btn-modal");
let modal = document.querySelector(".modal");
let iconClose = document.querySelector(".modal__header-icon");
let btnClose = document.querySelector(".modal__btn--close");

openModal = () => {
  modal.classList.remove("modal--hide");
};
closeModal = () => {
  modal.classList.add("modal--hide");
};

btnModal.addEventListener("click", openModal);
iconClose.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
modal.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
